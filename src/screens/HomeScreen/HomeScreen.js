import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Description from "../../components/Description/Description";
import MySkills from "../../components/MySkills/MySkills";
import Work from "../../components/Work/Work";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div class="home-container">
      <AboutMe></AboutMe>
      <hr></hr>
      <Description></Description>
      <hr></hr>
      <MySkills></MySkills>
      <hr></hr>
      <Work></Work>
    </div>
  );
};

export default HomeScreen;
