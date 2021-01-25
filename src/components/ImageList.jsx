import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard.jsx";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="image-list" style={{ marginLeft: "20px" }}>
      {images}
    </div>
  );
};

export default ImageList;
