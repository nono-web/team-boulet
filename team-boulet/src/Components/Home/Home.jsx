import React from 'react';
import room from "../../data";

const homerooms = ['Bedroom', 'Bathroom', 'Kitchen', 'Living room', 'Garden']

const Home = () => {
  return (
    <div className="main-container">
      <h1 class="titre-home">What is my next DIY project?</h1>
      <p class="txt-intro">Get all the materials you need for your next project and tips on how to do it like a pro!</p>
      <p class="txt-txt">Also take advantage of our remote coaching programme so that you are never alone during your project.</p>
      <p class="txt-question">Which room needs work?</p>
    </div>
)};

export default Home;