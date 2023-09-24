import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Carousel, Container } from "react-bootstrap";
import Slider from "react-slick";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { IoLogoCss3 } from "@react-icons/all-files/io/IoLogoCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { RiReactjsFill } from "@react-icons/all-files/ri/RiReactjsFill";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
import { SiInvision } from "@react-icons/all-files/si/SiInvision";


function Skills() {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <div id="skills" className="skills mb-5">
        <Container>
          <h2 className="text-center">My Skills</h2>
          <Slider {...settings} className="icons pt-3 pb-4">
            <div>
              <h1><AiFillHtml5 /></h1>
            </div>
            <div>
              <h1><IoLogoCss3 /></h1>
            </div>
            <div>
              <h1><SiJavascript/></h1>
            </div>
            <div>
              <h1><RiReactjsFill /></h1>
            </div>
            <div>
              <h1><SiRedux /></h1>  
            </div>
            <div>
              <h1><FaFigma /></h1>
            </div>
            <div>
              <h1><SiInvision /></h1>
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
}

export default Skills;
