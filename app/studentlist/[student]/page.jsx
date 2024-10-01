"use client";

import React from "react";
import Link from "next/link";

function student({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name : {params.student}</h3>
    </div>
  );
}

export default student;
