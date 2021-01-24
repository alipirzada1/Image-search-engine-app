import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img
        alt={image.alt_description}
        key={image.id}
        src={image.urls.regular}
      />
    );
  });

  return <div style={{ marginLeft: "20px" }}>{images}</div>;
};

export default ImageList;
