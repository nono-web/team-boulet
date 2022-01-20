import { React, useState } from "react";
import room from "../../data";
import "./CrossSelling.css";

const CrossSelling = () => {
  let [input, setInput] = useState(true);
  let [input1, setInput1] = useState(true);
  let [input2, setInput2] = useState(true);
  let [input3, setInput3] = useState(true);
  return (
    <div className="main-container1">
      <h1>Do you have what you need?</h1>
      <div className="option-container1">
        {room[0].materials
          .filter((e) => e.material_name === "Wooden Floor")
          .map((el) => (
            <div className="option-container2">
              <h3>Starter Pack {el.material_name}</h3>
              <div className="option-container3">
                <label for="name">Je prends tout</label>
                <input
                  type="checkbox"
                  checked={input}
                  onChange={() => setInput(!input)}
                />
              </div>
            </div>
          ))}
        {room[0].materials
          .filter((e) => e.material_name === "Wooden Floor")
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
                  <input type="checkbox" />
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
                  <input type="checkbox"   checked={input} onChange={() => setInput(!input)} />
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
                  <input type="checkbox"   checked={input} onChange={() => setInput(!input)} />
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
                  <input type="checkbox"  checked={input} onChange={() => setInput(!input)} />
                </div>
              </div>
            </div>
          ))}
      </div>{" "}
      <div className="option-container1">
        {room[1].materials
          .filter((e) => e.material_name === "Paint")
          .map((el) => (
            <div className="option-container2">
              <h3>Starter Pack {el.material_name}</h3>
              <div className="option-container3">
                <label for="name">Je prends tout</label>
                <input
                  type="checkbox"
                  checked={input1}
                  onChange={() => setInput1(!input1)}
                />
              </div>
            </div>
          ))}
        {room[1].materials
          .filter((e) => e.material_name === "Paint")
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
                  <input type="checkbox" onChange={() => setInput1(false)} />
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
                  <input type="checkbox" onChange={() => setInput1(false)} />
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
                  <input type="checkbox" onChange={() => setInput1(false)} />
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
                  <input type="checkbox" onChange={() => setInput1(false)} />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="option-container1">
        {room[1].materials
          .filter((e) => e.material_name === "Wallpaper")
          .map((el) => (
            <div className="option-container2">
              <h3>Starter Pack {el.material_name}</h3>
              <div className="option-container3">
                <label for="name">Je prends tout</label>
                <input
                  type="checkbox"
                  checked={input2}
                  onChange={() => setInput2(!input2)}
                />
              </div>
            </div>
          ))}
        {room[1].materials
          .filter((e) => e.material_name === "Wallpaper")
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
                  <input type="checkbox" onChange={() => setInput2(false)} />
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
                  <input type="checkbox" onChange={() => setInput2(false)} />
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
                  <input type="checkbox" onChange={() => setInput2(false)} />
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
                  <input type="checkbox" onChange={() => setInput2(false)} />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="option-container1">
        {room[2].materials
          .filter((e) => e.material_name === "Inertia Radiator")
          .map((el) => (
            <div className="option-container2">
              <h3>Starter Pack {el.material_name}</h3>
              <div className="option-container3">
                <label for="name">Je prends tout</label>
                <input
                  type="checkbox"
                  checked={input3}
                  onChange={() => setInput3(!input3)}
                />
              </div>
            </div>
          ))}
        {room[2].materials
          .filter((e) => e.material_name === "Inertia Radiator")
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
                  <input type="checkbox" onChange={() => setInput3(false)} />
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
                  <input type="checkbox" onChange={() => setInput3(false)} />
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
                  <input type="checkbox" onChange={() => setInput3(false)} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CrossSelling;
