import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export const MyCarausel = ({ data }) => {
  const images = data.all_img.map((el) => ({
    src: `${el}`,
  }));

  return (
    <Carousel
      images={images}
      objectFit="contain"
      hasLeftButton={false}
      hasRightButton={false}
      hasMediaButton={false}
      style={{ background: "white" }}
      thumbnailHeight="20%"
    />
  );
};
