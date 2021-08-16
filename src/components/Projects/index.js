import React, {useEffect, useState} from "react";
import Slick from "react-slick";

import mg1 from "../../images/MAGAZINES/1234.jpg";
import mg2 from '../../images/MAGAZINES/akshara.jpg';
import mg3 from '../../images/MAGAZINES/kajal gradient.jpg';
import mg4 from '../../images/MAGAZINES/magazine.jpg';
import mg5 from '../../images/MAGAZINES/model magazin1.jpg';
import mg6 from '../../images/MAGAZINES/priya.jpg';
import mg7 from '../../images/MAGAZINES/kuhasini.jpg';


import p1 from '../../images/POSTER/SURLI 11g.jpg';
import p2 from '../../images/POSTER/HBD ANADAVAR.jpg';
import p3 from '../../images/POSTER/MASTER FINAL.jpg';
import p4 from '../../images/POSTER/new2.jpg';
import p5 from '../../images/POSTER/putha pudhu kaalai.jpg';
import p6 from '../../images/POSTER/november story final .jpg';
import p7 from '../../images/POSTER/SOORARAI POTTRU TODAY.jpg';
import p8 from '../../images/POSTER/VIKRAM.jpg';
import p9 from '../../images/POSTER/triquetra.jpg';

import va1 from '../../images/VECTOR ART/AHAANA KRISHNAN.jpg';
import va2 from '../../images/VECTOR ART/beast poster design1.jpg';
import va3 from '../../images/VECTOR ART/IMG_20210816_101501.jpg';
import va4 from '../../images/VECTOR ART/meenakshi.jpg';
import va5 from '../../images/VECTOR ART/mirnalini.jpg';
import va6 from '../../images/VECTOR ART/NEZUKO.jpg';
import va7 from '../../images/VECTOR ART/Raiza.jpg';
import va8 from '../../images/VECTOR ART/nivetha2.jpg';
import va9 from '../../images/VECTOR ART/SID PLAYING.jpg';

import dg1 from '../../images/digital_Art/SARPATTA1.jpg';
import dg2 from '../../images/digital_Art/malavika dp.jpg';
import dg3 from '../../images/digital_Art/navarasa trailer.jpg';
import dg4 from '../../images/digital_Art/thala ajith kumar.jpg';
import dg5 from '../../images/digital_Art/aathmika1.jpg';


import {
  ProjectContainer,
  ProjectHeading,
  ProjectImg,
  ProjectTitle,
  ProjectWrapper,
  ProjectImgWrap
} from "./ProjectsElements";

const digitalArts = [dg1, dg2, dg3, dg4, dg5];
const magazines = [mg1, mg2, mg3, mg4, mg5, mg6, mg7];
const posters = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
const vectorArts = [va1, va2, va3, va4, va5, va6, va7, va8, va9];

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
  const [magazine, setMagazine] = useState([]);
  const [vectorArt, setVectorArt] = useState([]);
  const [poster, setPoster] = useState([]);
  const [digitalArt, setDigitalArt] = useState([]);

  useEffect(() => {
    setMagazine(
      magazines.map(mg => {
        return (
          <ProjectImgWrap key={mg}>
            <ProjectImg src={mg} />
          </ProjectImgWrap>
        )
      })
    );
    setVectorArt(
      vectorArts.map(va => {
        return (
          <ProjectImgWrap key={va}>
            <ProjectImg src={va} />
          </ProjectImgWrap>
        )
      })
    );
    setPoster(
      posters.map(p => {
        return (
          <ProjectImgWrap key={p}>
            <ProjectImg src={p} />
          </ProjectImgWrap>
        )
      })
    );
    setDigitalArt(
      digitalArts.map(dg => {
        return (
          <ProjectImgWrap key={dg}>
            <ProjectImg src={dg} />
          </ProjectImgWrap>
        )
      })
    );
  }, [])

  return (
    <ProjectContainer id='projects' >
      <ProjectHeading>Projects have done so far..</ProjectHeading>
      <ProjectWrapper>
        <ProjectTitle>Digital Art</ProjectTitle>
        <div data-aos="zoom-out-left"  data-aos-delay="100">
        <Slick {...settings} className="slider">
            { digitalArt }
        </Slick>
        </div>
      </ProjectWrapper>
      <ProjectWrapper>
        <ProjectTitle>Magazines</ProjectTitle>
        <div data-aos="zoom-out-right">
          <Slick {...settings} className="slider">
            {magazine}
        </Slick>
        </div>
      </ProjectWrapper>
      <ProjectWrapper>
        <ProjectTitle>Vector Arts</ProjectTitle>
        <div data-aos="zoom-out-left" >
        <Slick {...settings} {...customSetting} className="slider">
            {vectorArt}
        </Slick>
        </div>
      </ProjectWrapper>
      <ProjectWrapper>
        <ProjectTitle>Poster Designs</ProjectTitle>
        <div data-aos="zoom-out-right">
        <Slick {...settings} className="slider">
            { poster }
        </Slick>
        </div>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Projects;
