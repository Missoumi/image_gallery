import React, { Component } from "react";
import image_1 from "../../assets/01.jpg";
import image_2 from "../../assets/02.jpg";
import image_3 from "../../assets/03.jpg";
import image_4 from "../../assets/04.jpg";
import image_5 from "../../assets/05.jpg";
import image_6 from "../../assets/06.jpg";
import image_7 from "../../assets/07.jpg";
import image_8 from "../../assets/08.jpg";
import image_9 from "../../assets/09.jpg";
import image_10 from "../../assets/10.jpg";
import image_11 from "../../assets/11.jpg";
import image_12 from "../../assets/12.jpg";
import Image from "../atom/image";
import Button from "../styled_component/Button";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <div className="gallery text-center ">
        <h3 className="pb-3 pt-5">What's New</h3>
        <div className="row w-100 gallery_images">
          <Image image={image_1} alt="image_1" />
          <Image image={image_2} alt="image_2" />
          <Image image={image_3} alt="image_3" />
          <Image image={image_4} alt="image_4" />
          <Image image={image_5} alt="image_5" />
          <Image image={image_6} alt="image_6" />
          <Image image={image_7} alt="image_7" />
          <Image image={image_8} alt="image_8" />
        </div>
        <Button
          className="btn btn-primary my-5 px-4 py-2"
          style={{ fontSize: "25px" }}
        >
          Full Gallery
        </Button>
      </div>
    );
  }
}

export default Gallery;
