import React from "react";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import { useApp } from "../../Contexts/AppProvider";
import { useNavigate } from "react-router";
import "./Cart.css";



const Cart = () => {
  const {
    choice1,
    choice2,
    choice3,
    package1,
    package2,
    package3,
    product1,
    product2,
    product3,
  } = useApp();

  const navigate = useNavigate();

  const handleStartover = () => {
      localStorage.clear();
      navigate('/')
  }

  const total = parseInt(product1)+parseInt(product2)+parseInt(product3)+parseInt(package1)+parseInt(package2)+parseInt(package3);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 step5 step6></CheckoutSteps>
      <div className="main-container1">
        <h2>My  Cart</h2>

        <div className="container2">
          <h3 >My materials</h3>
          <div className="product-line">{choice1 ? `${choice1}: ${product1} €` : ""}</div>
          <div className="product-line">{choice2 ? `${choice2}: ${product2} €` : ""}</div>
          <div className="product-line">{choice3 ? `${choice3}: ${product3} €` : ""}</div>
          <button onClick={()=> navigate('/materials')}>Back to Materials choice</button>
        </div>

        <div className="container2">
          <h3>My starter packages</h3>
          <div className="product-line">{package1 !== '0' ? `${choice1}: ${package1} €` : ""}</div>
          <div className="product-line">{package2 !== '0' ? `${choice2}: ${package2} €` : ""}</div>
          <div className="product-line">{package3 !== '0' ? `${choice3}: ${package3} €` : ""}</div>
          <button onClick={()=> navigate('/cross-selling')}>Back to Packages choice</button>
        </div>

        <div className="total">
          <h3>Total {total} € </h3>
        </div>
        
        <button className="button1">
            Let's DIY
          </button>

          <button onClick={()=> handleStartover()}>Start another project</button>

      </div>

    </div>
  );
};

export default Cart;
