import useFileSelection from "../hooks/useFileSelection";
import { Button, Card } from "antd";
import DragAndDrop from "./DragAndDrop";

const ImageUpload = () => {
  const [addFile, removeFile, isUploading, uploadSelection] =
    useFileSelection();

  return (
    <Card
      style={{ margin: "auto", width: "50%" }}
      actions={[
        <Button type="primary" loading={isUploading} onClick={uploadSelection}>
          Submit
        </Button>,
      ]}
    >
      <DragAndDrop addFile={addFile} removeFile={removeFile} />
    </Card>
  );
};

export default ImageUpload;
