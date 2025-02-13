import React, { useState } from "react";
import "./Home.css";
import e1 from "./assets/mochi-1.gif";
import e2 from "./assets/mochi-2.gif";
import e3 from "./assets/mochi-3.gif";
import e5 from "./assets/mochi-5.gif"; // The final "Yes" image

export const Home = () => {
  const images = [e1, e3, e2]; // Array of normal images (excluding e5)
  const [noClicks, setNoClicks] = useState(0);
  const [position, setPosition] = useState({ top: "0px", left: "0px" });
  const [imageIndex, setImageIndex] = useState(0);
  const [yesClicked, setYesClicked] = useState(false); // Track if Yes is clicked

  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
  };

  const handleNoClick = () => {
    if (noClicks < 2) {
      const randomTop = Math.floor(Math.random() * 200 - 100) + "px";
      const randomLeft = Math.floor(Math.random() * 200 - 100) + "px";
      setPosition({ top: randomTop, left: randomLeft });
    }
    setNoClicks(noClicks + 1);
    changeImage(); // Change image on "No" click
  };

  const handleYesClick = () => {
    setYesClicked(true); // Set Yes clicked state to true
  };

  return (
    <>
      <div className="container">
        <div className="image-ror">
          <img
            src={yesClicked ? e5 : images[imageIndex]}
            alt="Mochi Cat Sticker"
          />
        </div>
        <div className="m-container">
          <p className="message">
            {yesClicked ? "I LOVE YOU! 💖" : "Will you be my Valentine?"}
          </p>
        </div>
        <div className={`b-container ${noClicks >= 3 ? "center" : ""}`}>
          {!yesClicked && noClicks < 3 && (
            <button
              className="no"
              style={{
                position: noClicks > 0 ? "absolute" : "relative",
                top: position.top,
                left: position.left,
              }}
              onClick={handleNoClick}
            >
              No
            </button>
          )}
          {!yesClicked && (
            <button className="yes" onClick={handleYesClick}>
              Yes
            </button>
          )}
        </div>
      </div>
    </>
  );
};
