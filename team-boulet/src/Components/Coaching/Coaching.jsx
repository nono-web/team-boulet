import React, { useState } from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import { useNavigate } from "react-router";
import { useApp } from "../../Contexts/AppProvider";
import "./Coaching.css";



const Coaching = () => {

  const [isClick1, setIsClick1] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);

  const selectPack1 = () => setIsClick1(!isClick1);
  const selectPack2 = () => setIsClick2(!isClick2);
  const selectPack3 = () => setIsClick3(!isClick3);

  const {setCoaching} = useApp();

  const navigate = useNavigate();

  const handleSubmitCoaching = () => {
    console.log('coucou');
    isClick1 ? setCoaching("Mano Pack: 5 €") : isClick2 ? setCoaching("Mano Mano Pack: 50 €") : setCoaching("Mano Mano Mano Pack: 150 €"); 
    navigate('/cart');
  }

  return (
    <>
    <div>
      <CheckoutSteps step1 step2 step3 step4 step5 ></CheckoutSteps>
    </div>

    <div className='m'>
    <div className="m-body">
      <h1 className='m-h1'> Need some help ? </h1>
      <div className='services'>
  
        <div className="cards">
          <div onClick={selectPack1} className={isClick1 ? "card-selected" : "card"}>
            <div className="title">Mano Pack </div>
            <div className="price">€ 5</div>
            <p className="p">Have the best advice from our expert before your project to organise ! </p>
          </div>
      
          <div onClick={selectPack2} className={isClick2 ? "card-selected" : "card"}>
            <div className="title">Mano Mano Pack</div>
            <div className="price">€ 50</div>
            <p className="p">Use our hot line on Saturdays and Sundays if you have an issue in your project !</p> 
          </div>
  
          <div onClick={selectPack3} className={isClick3 ? "card-selected" : "card"}>
            <div className="title">Mano Mano Mano Pack</div>
            <div className="price">€ 150</div>
            <p className="p">Be assisted by an expert at every step of the way on a 4h video call ! </p>
          </div>
  
        </div>
      </div>
      <button className="button1" onClick={()=>handleSubmitCoaching()}>Let's DIY</button>
    </div>
  </div>
  </>

  );
};

export default Coaching;