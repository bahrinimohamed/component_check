import React from "react";
import Photo from "./Profile_Photo.jpg";
export default function ProfilPhoto() {
  return (
    <div style={{ border: "solid1pxBlack", maxWidth: "100vw" }}>
      <img src={Photo} alt="profile" />
    </div>
  );
}
