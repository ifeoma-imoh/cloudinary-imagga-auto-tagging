import { message } from "antd";
import { uploadImage } from "../cloudinary/cloudinaryHelper";
import { defaultUploadTag } from "../cloudinary/cloudinaryConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useFileSelection = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  const addFile = (file) => {
    setSelectedFiles((currentSelection) => [...currentSelection, file]);
  };

  const removeFile = (file) => {
    setSelectedFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(file);
      newSelection.splice(fileIndex, 1);
      return newSelection;
    });
  };

  const uploadSelection = () => {
    if (selectedFiles.length === 0) {
      message.error("You need to select at least one image");
      return;
    }

    setIsUploading(true);
    const uploadResults = [];
    const returnedTags = [];

    selectedFiles.forEach((file) => {
      uploadImage({
        file,
        successCallback: (response) => {
          returnedTags.push(...response.tags);
          uploadResults.push(response);
          if (uploadResults.length === selectedFiles.length) {
            setIsUploading(false);
            const tags = new Set(returnedTags);
            tags.delete(defaultUploadTag);
            message.success("Images uploaded successfully");
            navigate("/gallery", { state: [...tags] });
          }
        },
      });
    });
  };

  return [addFile, removeFile, isUploading, uploadSelection];
};

export default useFileSelection;