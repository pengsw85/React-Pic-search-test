import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });
    // rmb, return <div> {["hello", "world"]} </div> will render "helloworld"
    return <div className="image-list">{images}</div>;
};

export default ImageList;
