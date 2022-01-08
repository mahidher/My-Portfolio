import React from "react";
import "./Work.css";

const Work = () => {
  const topFunction = () => {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    console.log("scroll");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className='work'>
      <h2>I'm proud to have worked in these awesome companies!</h2>
      <div className='work-icons'>
        <img src='citi_logo.png'></img>
        <img style={{ height: "50%" }} src='ineuron.jfif'></img>
      </div>
      <div class='back-to-top'>
        <i class='fas fa-arrow-circle-up'></i>
        <button
          type='button'
          class='btn-primary scroll-btn'
          onClick={topFunction}
        >
          BACK TO TOP
        </button>
      </div>
    </div>
  );
};

export default Work;
