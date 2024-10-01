"use client";

import React from "react";

function Lectures({ params }) {
  return (
    <div>
      <h1>Name :{params.lectures[0]}</h1>
      <h3>lecture : {params.lectures[1]}</h3>
    </div>
  );
}

export default Lectures;
