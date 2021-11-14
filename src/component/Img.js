import React from "react";
import image from "./images/Berylijn-profile.jpg";
import "./Img.css";

// const profilePicture = styled.img`
//   height: 200px;
//   width: 200px;
// `;

const Img = () => {
  return <img src={image} alt="Beryl" />;
};

export default Img;
