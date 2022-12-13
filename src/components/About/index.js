import React from 'react';
import LinkedIn from "../../assets/linkedIn/linkedIn.jpg"

function About() {
  return (
    <section className="my-5">
      <img src={LinkedIn} className="my-2" style={{ width: "40%"}} alt="linkedIn photo"/>
      <h1 id="about">About Me</h1>
      <p>Hi! Welcome to my personal portfolio! My name is Peyton Hoang, and I'm a full-stack developer! I graduated from Washington University bootcamp, with many projects to showcase! I'm proficient in React, MySQL, NoSQL, Javascript, Express, and so much more! Feel free to check out my works, and contact me with any career opportunities!</p>
    </section>
  );
}

export default About;
