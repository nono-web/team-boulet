import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';

import './Home.css';

const homerooms = ['Bedroom', 'Bathroom', 'Kitchen', 'Living room', 'Garden'];

const Home = () => {
  const [ButtonRoom, setButtonRoom] = useState(false);
  const selectRoom = () => setButtonRoom(true);
  const [ButtonLetsgo, setButtonLetsgo] = useState(false);
  const selectLetsgo = () => setButtonLetsgo(true);

  return (
    <div>
      <CheckoutSteps step1></CheckoutSteps>
      <div className='main-container-home'>
  
        <h1 className='titre-home'>What is my next DIY project?</h1>
        <p className='txt-intro'>Get all the materials you need for your next project and tips on how to do it like a pro!</p>
        <p className='txt-txt'>Also take advantage of our remote coaching programme so that you are never alone during your project.</p>

        <div className='rooms-container'>
          <p className='txt-question'>Which room needs work?</p>      
          {homerooms.map((listroom) => <button className='rooms'onClick={selectRoom} >{listroom}</button>)}
          <Link to='/materials'><button type='submit' className='button-sub' onClick={selectLetsgo}>Let's go !</button></Link>
        </div>

      </div>
    </div>
  )};


export default Home;