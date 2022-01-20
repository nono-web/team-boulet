Accèder aux données data.js (exemple)

import room from "../../data";

<>
      <h2>Elements</h2>
      <div>
        {room.map((el) => (
          <p>{el.name}</p>
        ))}
      </div>
      <h2>Materials</h2>
      <div>
        {room[0].materials.map((el) => (
          <div>
            <div>
              <p>{el.material_name}</p>
              <a href={el.url1}>
                <img src={el.image1} alt=""></img>
              </a>
              <p>Prix: {el.price1}€</p>
            </div>
            <div>
              <a href={el.url2}>
                <img src={el.image2} alt=""></img>
              </a>
              <p>Prix: {el.price2}€</p>
            </div>
            <div>
              <a href={el.url3}>
                <img src={el.image3} alt=""></img>
              </a>
              <p>Prix: {el.price3}€</p>
            </div>
            <div>
              <a href={el.url4}>
                <img src={el.image4} alt=""></img>
              </a>
              <p>Prix: {el.price4}€</p>
            </div>
          </div>
        ))}
      </div>
    </>
cd team-boulet
npm start