import { getImages } from "../cloudinary/cloudinaryHelper";
import { useEffect, useState } from "react";
import { Image, Transformation } from "cloudinary-react";
import { cloudName, uploadPreset } from "../cloudinary/cloudinaryConfig";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import Tags from "./Tags";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const location = useLocation();
  const uploadResultTags = location.state ?? [];
  const tags = ["All", ...uploadResultTags];
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    getImages({
      successCallback: setImages,
      imageTag: activeTag === "All" ? null : activeTag,
    });
  }, [activeTag]);

  useEffect(() => {
    getImages({
      successCallback: setImages,
    });
  }, []);

  return (
    <>
      <Row>
        <Tags tags={tags} setActiveTag={setActiveTag} />
      </Row>

      <Row gutter={[0, 16]} align="middle">
        {images.map((image, index) => (
          <Col span={6} key={index}>
            <Image
              publicId={image.public_id}
              cloudName={cloudName}
              upload_preset={uploadPreset}
              secure={true}
              alt={image.originalFilename}
            >
              <Transformation width={300} height={300} crop="scale" />
            </Image>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Gallery;
