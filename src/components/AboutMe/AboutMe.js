import React from "react";
import "./AboutMe.css";
import Typewriter from "typewriter-effect";

const AboutMe = () => {
  const discoverScroll = () => {
    console.log("scroll");
    // window.scrollBy(0, 800);
    window.scrollTo({
      top: 670, // could be negative value
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="aboutme">
      <h1>Mahidher.</h1>
      <div class="typewriter">
      <Typewriter 
        options={{
          strings: ["I'm a Full Stack Developer!", "I'm a machine learning enthusiast!","And Most Important of all,I love to learn new stuff!"],
          autoStart: true,
          loop: true,
          delay:50,
        }}
      />
      </div>
      <button type="button" class="btn-primary" onClick={discoverScroll}>
        DISCOVER MORE
      </button>
    </div>
  );
};

export default AboutMe;
