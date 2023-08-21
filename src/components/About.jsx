import React, { useState } from "react";
import User from "./User";
import AllansClassComponent from "./AboutClass";

function About() {
  return (
    <>
      <h2>This is the about page</h2>
      <h3>These are our employees:</h3>
      <User />
      <AllansClassComponent />
    </>
  );
}

export default About;
