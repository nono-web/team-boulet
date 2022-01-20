import React from "react";
import room from "../../data";
import "./Options.css";

const Options = () => {
  return (
    <div className="main-container">
      <h1>My Options</h1>

      <div className="option-container">
        {room[0].materials
          .filter((e) => e.material_name === "Wooden Floor")
          .map((el) => (
            <h3>{el.material_name}</h3>
          ))}
        {room[0].materials
          .filter((e) => e.material_name === "Wooden Floor")
          .map((el) => (
            <div>
              <div className="products-container">
                <div className="product-container">
                  <a target="_blank" href={el.url1} rel="noreferrer">
                    <img src={el.image1} alt=""></img>
                  </a>
                  <p>Price: {el.price1}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url2} rel="noreferrer">
                    <img src={el.image2} alt=""></img>
                  </a>
                  <p>Price: {el.price2}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url3} rel="noreferrer">
                    <img src={el.image3} alt=""></img>
                  </a>
                  <p>Price: {el.price3}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url4} rel="noreferrer">
                    <img src={el.image4} alt=""></img>
                  </a>
                  <p>Price: {el.price4}€</p>
                </div>
              </div>
              <a target="_blank" href={el.conseil} rel="noreferrer">
              <p className="conseil">My ManoMano Advice</p>
              </a>
            </div>
          ))}
      </div>
      <div className="option-container">
        {room[1].materials
          .filter((e) => e.material_name === "Paint")
          .map((el) => (
            <h3>{el.material_name}</h3>
          ))}
        {room[1].materials
          .filter((e) => e.material_name === "Paint")
          .map((el) => (
            <div>
              <div className="products-container">
                <div className="product-container">
                  <a target="_blank" href={el.url1} rel="noreferrer">
                    <img src={el.image1} alt=""></img>
                  </a>
                  <p>Price: {el.price1}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url2} rel="noreferrer">
                    <img src={el.image2} alt=""></img>
                  </a>
                  <p>Price: {el.price2}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url3} rel="noreferrer">
                    <img src={el.image3} alt=""></img>
                  </a>
                  <p>Price: {el.price3}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url4} rel="noreferrer">
                    <img src={el.image4} alt=""></img>
                  </a>
                  <p>Price: {el.price4}€</p>
                </div>
              </div>
              <a target="_blank" href={el.conseil} rel="noreferrer">
              <p className="conseil">My ManoMano Advice</p>
              </a>
            </div>
          ))}
      </div>
      <div className="option-container">
        {room[1].materials
          .filter((e) => e.material_name === "Wallpaper")
          .map((el) => (
            <h3>{el.material_name}</h3>
          ))}
        {room[1].materials
          .filter((e) => e.material_name === "Wallpaper")
          .map((el) => (
            <div>
              <div className="products-container">
                <div className="product-container">
                  <a target="_blank" href={el.url1} rel="noreferrer">
                    <img src={el.image1} alt=""></img>
                  </a>
                  <p>Price: {el.price1}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url2} rel="noreferrer">
                    <img src={el.image2} alt=""></img>
                  </a>
                  <p>Price: {el.price2}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url3} rel="noreferrer">
                    <img src={el.image3} alt=""></img>
                  </a>
                  <p>Price: {el.price3}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url4} rel="noreferrer">
                    <img src={el.image4} alt=""></img>
                  </a>
                  <p>Price: {el.price4}€</p>
                </div>
              </div>
              <a target="_blank" href={el.conseil} rel="noreferrer">
              <p className="conseil">My ManoMano Advice</p>
              </a>
            </div>
          ))}
      </div>
      <div className="option-container">
        {room[2].materials
          .filter((e) => e.material_name === "Inertia Radiator")
          .map((el) => (
            <h3>{el.material_name}</h3>
          ))}
        {room[2].materials
          .filter((e) => e.material_name === "Inertia Radiator")
          .map((el) => (
            <div>
              <div className="products-container">
                <div className="product-container">
                  <a target="_blank" href={el.url1} rel="noreferrer">
                    <img src={el.image1} alt=""></img>
                  </a>
                  <p>Price: {el.price1}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url2} rel="noreferrer">
                    <img src={el.image2} alt=""></img>
                  </a>
                  <p>Price: {el.price2}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url3} rel="noreferrer">
                    <img src={el.image3} alt=""></img>
                  </a>
                  <p>Price: {el.price3}€</p>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url4} rel="noreferrer">
                    <img src={el.image4} alt=""></img>
                  </a>
                  <p>Price: {el.price4}€</p>
                </div>
              </div>
              <a target="_blank" href={el.conseil} rel="noreferrer">
              <p className="conseil">My ManoMano Advice</p>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Options;
