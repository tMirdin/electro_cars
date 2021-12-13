import React from "react";
import Content from "../Home/Content/Content";
import "./style/Home.css";
import Accordion from "../Filter/Accordion";
import PowersLap from "../../../assets/video/production.mp4";

const Home = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        width="100%"
        height="100%"
        className="videoHome"
      >
        <source src={PowersLap} type="video/mp4" />
      </video>
      <div className="content">
        <Accordion className="accordion" />
        <Content className="contentCars" />
      </div>
    </>
  );
};

export default Home;
