import React from "react";
import "../styles/Left-Bar.css";
import camera_icon from "../../assets/icons/camera.png";
import home_icon from "../../assets/icons/home.png";
import paper_icon from "../../assets/icons/paper.png";
import Icon from "../atom/icon";

const LeftBar = () => {
  return (
    <div className="left_bar ">
        <Icon icon={home_icon} alt='home' />
        <Icon icon={camera_icon} alt='camera' />
        <Icon icon={paper_icon} alt='paper' />
    </div>
  );
};

export default LeftBar;
