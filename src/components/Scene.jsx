import React from "react";
import SceneTitle from "./SceneTitle";
import Carousel from "./Carousel";

const Scene = React.forwardRef(({ title, titleRef, carouselRef, images, idx }, ref) => (
  <div className="scene" ref={ref}>
    <SceneTitle ref={titleRef}>
      <a href={`#preview-${idx + 1}`}>
        <span>{title}</span>
      </a>
    </SceneTitle>
    <Carousel ref={carouselRef} images={images} />
  </div>
));

export default Scene;