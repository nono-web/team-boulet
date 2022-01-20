import React, { useState } from "react";
import room from "../../data";
import "./Options.css";

const Options = () => {
  const [valueFloor, setValueFloor] = useState(1);
  const [valueWall, setValueWall] = useState(1);

  return (
    <div className="main-container">
      <h1>My Options</h1>

      <div className="option-container">
        {room[0].materials
          .filter((e) => e.material_name === "Wooden Floor")
          .map((el) => (
            <h3>{el.material_name}</h3>
          ))}
        <label for="floor">Filter:</label>
        <select name="floor" id="floor">
          <option value="all">All</option>
          <option value="blonde">Blonde</option>
          <option value="honey">Honey</option>
          <option value="chevron">Chevron</option>
        </select>
        <form>
          <label for="name">
            m²(+/-10%)
            <input
              type="text"
              id="floor"
              name="floor"
              required
              minlength="1"
              maxlength="2"
              size="4"
              placeholder={valueFloor}
              value={valueFloor}
              onChange={(e) => setValueFloor(e.target.value)}
            ></input>
          </label>
        </form>

        {room[0].materials
          .filter((e) => e.material_name === "Wooden Floor")
          .map((el) => (
            <div>
              <div className="products-container">
                <div className="product-container">
                  <a target="_blank" href={el.url1} rel="noreferrer">
                    <img src={el.image1} alt=""></img>
                  </a>
                  <p>Price: {el.price1 * valueFloor}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url2} rel="noreferrer">
                    <img src={el.image2} alt=""></img>
                  </a>
                  <p>Price: {el.price2 * valueFloor}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url3} rel="noreferrer">
                    <img src={el.image3} alt=""></img>
                  </a>
                  <p>Price: {el.price3 * valueFloor}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url4} rel="noreferrer">
                    <img src={el.image4} alt=""></img>
                  </a>
                  <p>Price: {el.price4 * valueFloor}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
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
        <label for="floor">Filter:</label>
        <select name="floor" id="floor">
          <option value="all">All</option>
          <option value="blue">Blue</option>
          <option value="grey">Grey</option>
          <option value="green ">Green</option>
        </select>
        <form>
          <label for="name">
            m²(+/-10%)
            <input
              type="text"
              id="floor"
              name="floor"
              required
              minlength="1"
              maxlength="2"
              size="4"
              placeholder={valueWall}
              value={valueWall}
              onChange={(e) => setValueWall(e.target.value)}
            ></input>
          </label>
        </form>
        {room[1].materials
          .filter((e) => e.material_name === "Paint")
          .map((el) => (
            <div>
              <div className="products-container">
                <div className="product-container">
                  <a target="_blank" href={el.url1} rel="noreferrer">
                    <img src={el.image1} alt=""></img>
                  </a>
                  <p>Price: {el.price1 * valueWall}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url2} rel="noreferrer">
                    <img src={el.image2} alt=""></img>
                  </a>
                  <p>Price: {el.price2 * valueWall}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url3} rel="noreferrer">
                    <img src={el.image3} alt=""></img>
                  </a>
                  <p>Price: {el.price3 * valueWall}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url4} rel="noreferrer">
                    <img src={el.image4} alt=""></img>
                  </a>
                  <p>Price: {el.price4 * valueWall}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
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
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url2} rel="noreferrer">
                    <img src={el.image2} alt=""></img>
                  </a>
                  <p>Price: {el.price2}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url3} rel="noreferrer">
                    <img src={el.image3} alt=""></img>
                  </a>
                  <p>Price: {el.price3}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
                </div>
                <div className="product-container">
                  <a target="_blank" href={el.url4} rel="noreferrer">
                    <img src={el.image4} alt=""></img>
                  </a>
                  <p>Price: {el.price4}€</p>
                  <input type="checkbox" id={el.url1} name="select"></input>
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
