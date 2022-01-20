import React, { useState } from 'react';
import room from '../../data';

import './Home.css';

const homerooms = ['Bedroom', 'Bathroom', 'Kitchen', 'Living room', 'Garden'];



// handleChangeRooms = {};
const handleChangeLetsgo = {};

// const listrooms = homerooms.map((listroom) => <button className='rooms' onChange={handleChangeRooms}>{listroom}</button>);
// const listrooms = homerooms.map((listroom) => <div className='rooms'>{listroom}</div>);

const Home = () => {
  const [ButtonRoom, setButtonRoom] = useState(false);
  const selectRoom = () => setButtonRoom(true);
  const [ButtonLetsgo, setButtonLetsgo] = useState(false);
  const selectLetsgo = () => setButtonLetsgo(true);

  return (
    <div className='main-container'>

      <h1 className='titre-home'>What is my next DIY project?</h1>
      <p className='txt-intro'>Get all the materials you need for your next project and tips on how to do it like a pro!</p>
      <p className='txt-txt'>Also take advantage of our remote coaching programme so that you are never alone during your project.</p>
      <p className='txt-question'>Which room needs work?</p>

      <div className='rooms-container'>
        {homerooms.map((listroom) => <button className='rooms'onClick={selectRoom} >{listroom}</button>)}
      </div>
      
      <button type='submit' className='button-sub' onClick={selectLetsgo}>Let's go !</button>      

    </div>
  )};

    

export default Home;