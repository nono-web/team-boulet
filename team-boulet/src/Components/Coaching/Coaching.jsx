import React from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import { useNavigate } from "react-router";
import "./Coaching.css";



const Coaching = () => {


  const navigate = useNavigate();



  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 step5 step6></CheckoutSteps>
    </div>
  );
};

export default Coaching;