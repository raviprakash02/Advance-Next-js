"use client";
// pages/geolocation.js
import { useEffect, useState } from "react";

function Geolocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  const success = (position) => {
    setPosition(position);
  };
  const errorCallback = (error) => {
    setError(error);
  };
  // useEffect(() => {
  //   if (window) {
  //     if (navigator.geolocation) {
  //       navigator?.geolocation?.getCurrentPosition(success, errorCallback);
  //     } else {
  //       setError("Geolocation is not supported by this browser.");
  //     }
  //   }
  // }, []);

  return (
    <div>
      <h1>HTML Geolocation</h1>
      <p>Click the button to get your coordinates.</p>
      <button
        onClick={() =>
          navigator.geolocation.getCurrentPosition(success, errorCallback)
        }
      >
        Try It
      </button>
      <p>
        {position
          ? `Latitude: ${position.coords.latitude} <br /> Longitude: ${position.coords.longitude}`
          : error}
      </p>
    </div>
  );
}

export default Geolocation;
