import { React, useState } from "react";
import room from "../../data";
import { useApp } from '../../Contexts/AppProvider';
import "./CrossSelling.css";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";

const CrossSelling = () => {
  let [input, setInput] = useState(true);
  let [input1, setInput1] = useState(true);
  let [input2, setInput2] = useState(true);
  let [input3, setInput3] = useState(true);

  const { choice1, choice2, choice3} = useApp();

  let [input4, setInput4] = useState(true);
  let [input5, setInput5] = useState(true);
  let [input6, setInput6] = useState(true);
  let [input7, setInput7] = useState(true);
  let [input8, setInput8] = useState(true);
  let [input9, setInput9] = useState(true);
  let [input10, setInput10] = useState(true);
  let [input11, setInput11] = useState(true);
  let [input12, setInput12] = useState(true);
  let [input13, setInput13] = useState(true);
  let [input14, setInput14] = useState(true);
  let [input15, setInput15] = useState(true);
  let [input16, setInput16] = useState(true);
  let [input17, setInput17] = useState(true);
  let [input18, setInput18] = useState(true);


  return (
    <div>
    <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>

    <div className="main-container1">
      <h1>Do you have what you need?</h1>
      <div className="option-container1">
        {room[0].materials
          .filter((e) => e.material_name === choice1)
          .map((el) => (
            <div className="option-container2">
              <h3>Starter Pack {el.material_name}</h3>
              <div className="option-container3">
                <label for="name">I take All</label>
                <input
                  type="checkbox"
                  checked={input}
                  onChange={() => setInput(!input)}
                />
              </div>
            </div>
          ))}
        {room[0].materials
          .filter((e) => e.material_name === choice1)
          .map((el) => (
            <div>
              <div className="products-container1">
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url1}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image1} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name1}</h3>
                  <p>Price: {el.starter_pack_price1}€</p>
                  <input
                  type="checkbox"
                  checked={input18}
                  onChange={() => setInput18(!input18)}
                />
                </div>
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url2}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image2} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name2}</h3>
                  <p>Price: {el.starter_pack_price2}€</p>
                  <input
                    type="checkbox"
                    checked={input1}
                    onChange={() => setInput1(!input1)}
                  />
                </div>
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url3}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image3} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name3}</h3>
                  <p>Price: {el.starter_pack_price3}€</p>
                  <input
                    type="checkbox"
                    checked={input2}
                    onChange={() => setInput2(!input2)}
                  />
                </div>
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url4}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image4} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name4}</h3>
                  <p>Price: {el.starter_pack_price4}€</p>
                  <input
                    type="checkbox"
                    checked={input3}
                    onChange={() => setInput3(!input3)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>{" "}
      <div className="option-container1">
        {room[1].materials
          .filter((e) => e.material_name === choice2)
          .map((el) => (
            <div className="option-container2">
              <h3>Starter Pack {el.material_name}</h3>
              <div className="option-container3">
                <label for="name">Je prends tout</label>
                <input
                  type="checkbox"
                  checked={input4}
                  onChange={() => setInput4(!input4)}
                />
              </div>
            </div>
          ))}
        {room[1].materials
          .filter((e) => e.material_name === choice2)
          .map((el) => (
            <div>
              <div className="products-container1">
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url1}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image1} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name1}</h3>
                  <p>Price: {el.starter_pack_price1}€</p>
                  <input
                    type="checkbox"
                    checked={input5}
                    onChange={() => setInput5(!input5)}
                  />
                </div>
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url2}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image2} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name2}</h3>
                  <p>Price: {el.starter_pack_price2}€</p>
                  <input
                    type="checkbox"
                    checked={input6}
                    onChange={() => setInput6(!input6)}
                  />
                </div>
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url3}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image3} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name3}</h3>
                  <p>Price: {el.starter_pack_price3}€</p>
                  <input
                    type="checkbox"
                    checked={input7}
                    onChange={() => setInput7(!input7)}
                  />
                </div>
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url4}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image4} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name4}</h3>
                  <p>Price: {el.starter_pack_price4}€</p>
                  <input
                    type="checkbox"
                    checked={input8}
                    onChange={() => setInput8(!input8)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="option-container1">

      
      <div className="option-container1">

        {room[2].materials
          .filter((e) => e.material_name === choice3)
          .map((el) => (
            <div className="option-container2">
              <h3>Starter Pack {el.material_name}</h3>
              <div className="option-container3">
                <label for="name">Je prends tout</label>
                <input
                  type="checkbox"
                  checked={input14}
                  onChange={() => setInput14(!input14)}
                />
              </div>
            </div>
          ))}
        {room[2].materials
          .filter((e) => e.material_name === choice3)
          .map((el) => (
            <div>
              <div className="products-container1">
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url1}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image1} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name1}</h3>
                  <p>Price: {el.starter_pack_price1}€</p>
                  <input
                    type="checkbox"
                    checked={input15}
                    onChange={() => setInput15(!input15)}
                  />
                </div>
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url2}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image2} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name2}</h3>
                  <p>Price: {el.starter_pack_price2}€</p>
                  <input
                    type="checkbox"
                    checked={input16}
                    onChange={() => setInput16(!input16)}
                  />
                </div>
                <div className="product-container2">
                  <a
                    target="_blank"
                    href={el.starter_pack_url3}
                    rel="noreferrer"
                  >
                    <img src={el.starter_pack_image3} alt=""></img>
                  </a>
                  <h3>{el.starter_pack_name3}</h3>
                  <p>Price: {el.starter_pack_price3}€</p>
                  <input
                    type="checkbox"
                    checked={input17}
                    onChange={() => setInput17(!input17)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default CrossSelling;
