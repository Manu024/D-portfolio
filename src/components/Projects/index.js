import React from "react";
import Slick from "react-slick";
// import img from "../../images/kate-macate-RNkWBV4mMLI-unsplash.jpg";
import mg1 from "../../images/MAGAZINES/1234.jpg";
import mg2 from '../../images/MAGAZINES/akshara.jpg';
import mg3 from '../../images/MAGAZINES/kajal gradient.jpg';
import mg4 from '../../images/MAGAZINES/magazine.jpg';
import mg5 from '../../images/MAGAZINES/model magazin1.jpg';
import mg6 from '../../images/MAGAZINES/priya.jpg';

import p1 from '../../images/POSTER/antha kanna paathaka.psd125.jpg';
import p2 from '../../images/POSTER/HBD ANADAVAR.jpg';
import p3 from '../../images/POSTER/MASTER FINAL.jpg';
import p4 from '../../images/POSTER/new2.jpg';
import p5 from '../../images/POSTER/putha pudhu kaalai.jpg';
import p6 from '../../images/POSTER/samantha gradient .jpg';
import p7 from '../../images/POSTER/SOORARAI POTTRU TODAY.jpg';
import p8 from '../../images/POSTER/VIKRAM.jpg';
import p9 from '../../images/POSTER/yuvan new.jpg';

import va1 from '../../images/VECTOR ART/AHAANA KRISHNAN.jpg';
import va2 from '../../images/VECTOR ART/andrea1.jpg';
import va3 from '../../images/VECTOR ART/Kalyani Priyadharshan.jpg';
import va4 from '../../images/VECTOR ART/meenakshi.jpg';
import va5 from '../../images/VECTOR ART/n t.jpg';
import va6 from '../../images/VECTOR ART/NEZUKO.jpg';
import va7 from '../../images/VECTOR ART/Raiza.jpg';
import va8 from '../../images/VECTOR ART/sanjana sarathy.jpg';
import va9 from '../../images/VECTOR ART/SID PLAYING.jpg';

import {
  ProjectContainer,
  ProjectHeading,
  ProjectImg,
  ProjectTitle,
  ProjectWrapper,
  ProjectImgWrap
} from "./ProjectsElements";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        }
      }
    ]
  };


  const customSetting = {
    rtl: true
  }

  return (
    <ProjectContainer id='projects' >
      <ProjectHeading>Projects have done so far..</ProjectHeading>
      <ProjectWrapper>
        <ProjectTitle>Magazines</ProjectTitle>
        <div data-aos="zoom-out-right" data-aos-delay="100">
          <Slick {...settings} className="slider">
            <ProjectImgWrap>
            <ProjectImg src={mg1} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={mg2} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={mg3} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={mg4} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={mg5} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={mg6} />
            </ProjectImgWrap>
        </Slick>
        </div>
      </ProjectWrapper>
      <ProjectWrapper>
        <ProjectTitle>Vector Arts</ProjectTitle>
        <div data-aos="zoom-out-left" >
        <Slick {...settings} {...customSetting} className="slider">
        <ProjectImgWrap>
            <ProjectImg src={va1} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={va2} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={va3} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={va4} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={va5} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={va6} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={va7} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={va8} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={va9} />
            </ProjectImgWrap>
        </Slick>
        </div>
      </ProjectWrapper>
      <ProjectWrapper>
        <ProjectTitle>Poster Designs</ProjectTitle>
        <div data-aos="zoom-out-right">
        <Slick {...settings} className="slider">
        <ProjectImgWrap>
            <ProjectImg src={p1} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={p2} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={p3} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={p4} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={p5} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={p6} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={p7} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={p8} />
            </ProjectImgWrap>
            <ProjectImgWrap>
            <ProjectImg src={p9} />
            </ProjectImgWrap>
        </Slick>
        </div>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Projects;
