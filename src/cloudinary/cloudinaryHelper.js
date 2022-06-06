import axios from "axios";
import { cloudName, defaultUploadTag, uploadPreset } from "./cloudinaryConfig";

export const uploadImage = ({ file, successCallback }) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);
  data.append("tags", defaultUploadTag);

  axios
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => successCallback(response.data));
};

export const getImages = ({ successCallback, imageTag }) => {
  axios
    .get(
      `https://res.cloudinary.com/${cloudName}/image/list/${
        imageTag || defaultUploadTag
      }.json`
    )
    .then((response) => successCallback(response.data.resources));
};
