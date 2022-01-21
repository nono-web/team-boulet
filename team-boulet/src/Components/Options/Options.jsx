import React, { useState } from "react";
import room from "../../data";
import { useApp } from "../../Contexts/AppProvider";
import { useNavigate } from "react-router";
import "./Options.css";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";

const Options = () => {
  const [valueFloor, setValueFloor] = useState(1);
  const [valueWall, setValueWall] = useState(1);

  const navigate = useNavigate();

  const { choice1, choice2, choice3, setProduct1, setProduct2, setProduct3 } =
    useApp();

  const handleProduct1 = (e) => {
    setProduct1(e.target.value);
  };

  const handleProduct2 = (e) => {
    setProduct2(e.target.value);
  };

  const handleProduct3 = (e) => {
    setProduct3(e.target.value);
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="main-container-home2">
        <h1 className="titre-home">My Options</h1>

        <div className="option-container">
          {room[0].materials
            .filter((e) => e.material_name === choice1)
            .map((el) => (
              <h3 className="product-category">{el.material_name}</h3>
            ))}
            <div className="filter-calculate">
          <label for="floor">Filter:</label>
          <select className="label-filter" name="floor" id="floor">
            <option value="all">All</option>
            <option value="blonde">Blonde</option>
            <option value="honey">Honey</option>
            <option value="chevron">Chevron</option>
          </select>
          <form>
            <label for="calculate">
              m²(+/-10%)
              <input
                type="text"
                id="floor"
                name="floor"
                required
                minlength="1"
                maxlength="2"
                size="2"
                placeholder={valueFloor}
                value={valueFloor}
                onChange={(e) => setValueFloor(e.target.value)}
              ></input>
            </label>
          </form>
          </div>

          {room[0].materials
            .filter((e) => e.material_name === choice1)
            .map((el) => (
              <div>
                <div className="products-container">
                  <div className="product-container">
                    <a target="_blank" href={el.url1} rel="noreferrer">
                      <img src={el.image1} alt=""></img>
                    </a>
                    <p>Price: {el.price1 * valueFloor}€</p>
                    <input
                      type="checkbox"
                      id={el.url1}
                      value={el.price1 * valueFloor}
                      name="select"
                      onClick={(e) => handleProduct1(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url2} rel="noreferrer">
                      <img src={el.image2} alt=""></img>
                    </a>
                    <p>Price: {el.price2 * valueFloor}€</p>
                    <input
                      type="checkbox"
                      id={el.url2}
                      value={el.price2 * valueFloor}
                      name="select"
                      onClick={(e) => handleProduct1(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url3} rel="noreferrer">
                      <img src={el.image3} alt=""></img>
                    </a>
                    <p>Price: {el.price3 * valueFloor}€</p>
                    <input
                      type="checkbox"
                      id={el.url3}
                      value={el.price3 * valueFloor}
                      name="select"
                      onClick={(e) => handleProduct1(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url4} rel="noreferrer">
                      <img src={el.image4} alt=""></img>
                    </a>
                    <p>Price: {el.price4 * valueFloor}€</p>
                    <input
                      type="checkbox"
                      id={el.url4}
                      value={el.price4 * valueFloor}
                      name="select"
                      onClick={(e) => handleProduct1(e)}
                    ></input>
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
            .filter((e) => e.material_name === choice2)
            .map((el) => (
              <h3 className="product-category">{el.material_name}</h3>
            ))}
        <div className="filter-calculate">
          <label for="wall">Filter:</label>
          <select className="label-filter" name="wall" id="wall">
            <option value="all">All</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
          </select>
          <form>
            <label for="calculate">
              m²(+/-10%)
              <input
                type="text"
                id="wall"
                name="wall"
                required
                minlength="1"
                maxlength="2"
                size="2"
                placeholder={valueWall}
                value={valueWall}
                onChange={(e) => setValueWall(e.target.value)}
              ></input>
            </label>
          </form>
          </div>
          {room[1].materials
            .filter((e) => e.material_name === choice2)
            .map((el) => (
              <div>
                <div className="products-container">
                  <div className="product-container">
                    <a target="_blank" href={el.url1} rel="noreferrer">
                      <img src={el.image1} alt=""></img>
                    </a>
                    <p>Price: {el.price1 * valueWall}€</p>
                    <input
                      type="checkbox"
                      id={el.url1}
                      value={el.price1 * valueWall}
                      name="select"
                      onClick={(e) => handleProduct2(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url2} rel="noreferrer">
                      <img src={el.image2} alt=""></img>
                    </a>
                    <p>Price: {el.price2 * valueWall}€</p>
                    <input
                      type="checkbox"
                      id={el.url2}
                      value={el.price2 * valueWall}
                      name="select"
                      onClick={(e) => handleProduct2(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url3} rel="noreferrer">
                      <img src={el.image3} alt=""></img>
                    </a>
                    <p>Price: {el.price3 * valueWall}€</p>
                    <input
                      type="checkbox"
                      id={el.url3}
                      value={el.price3 * valueWall}
                      name="select"
                      onClick={(e) => handleProduct2(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url4} rel="noreferrer">
                      <img src={el.image4} alt=""></img>
                    </a>
                    <p>Price: {el.price4 * valueWall}€</p>
                    <input
                      type="checkbox"
                      id={el.url4}
                      value={el.price4 * valueWall}
                      name="select"
                      onClick={(e) => handleProduct2(e)}
                    ></input>
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
            .filter((e) => e.material_name === choice3)
            .map((el) => (
              <h3 className="product-category">{el.material_name}</h3>
            ))}
          {room[2].materials
            .filter((e) => e.material_name === choice3)
            .map((el) => (
              <div>
                <div className="products-container">
                  <div className="product-container">
                    <a target="_blank" href={el.url1} rel="noreferrer">
                      <img src={el.image1} alt=""></img>
                    </a>
                    <p>Price: {el.price1}€</p>
                    <input
                      type="checkbox"
                      id={el.url1}
                      value={el.price1}
                      name="select"
                      onClick={(e) => handleProduct3(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url2} rel="noreferrer">
                      <img src={el.image2} alt=""></img>
                    </a>
                    <p>Price: {el.price2}€</p>
                    <input
                      type="checkbox"
                      id={el.url2}
                      value={el.price2}
                      name="select"
                      onClick={(e) => handleProduct3(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url3} rel="noreferrer">
                      <img src={el.image3} alt=""></img>
                    </a>
                    <p>Price: {el.price3}€</p>
                    <input
                      type="checkbox"
                      id={el.url3}
                      value={el.price3}
                      name="select"
                      onClick={(e) => handleProduct3(e)}
                    ></input>
                  </div>
                  <div className="product-container">
                    <a target="_blank" href={el.url4} rel="noreferrer">
                      <img src={el.image4} alt=""></img>
                    </a>
                    <p>Price: {el.price4}€</p>
                    <input
                      type="checkbox"
                      id={el.url4}
                      value={el.price4}
                      name="select"
                      onClick={(e) => handleProduct3(e)}
                    ></input>
                  </div>
                </div>
                <a target="_blank" href={el.conseil} rel="noreferrer">
                  <p className="conseil">My ManoMano Advice</p>
                </a>
              </div>
            ))}
        </div>
        <div className="Letsgo">
          <button className="button-sub1" onClick={() => navigate("/cross-selling")}>
            Let's DIY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
