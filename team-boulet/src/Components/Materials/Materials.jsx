import React, { useState } from 'react';
import { useApp } from '../../Contexts/AppProvider';
import './Materials.css';

const Materials = () => {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);
  const [isSelected5, setIsSelected5] = useState(false);
  const [isSelected6, setIsSelected6] = useState(false);
  const [isSelected7, setIsSelected7] = useState(false);
  const [isSelected8, setIsSelected8] = useState(false);
  const [isSelected9, setIsSelected9] = useState(false);
  const [isSelected10, setIsSelected10] = useState(false);
  const [isSelected11, setIsSelected11] = useState(false);

  const [showButton, setShowButton] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false);
  const [showButton4, setShowButton4] = useState(false);
  const [showButton5, setShowButton5] = useState(false);
  const [showButton6, setShowButton6] = useState(false);

  const { setChoice1, setChoice2, setChoice3} = useApp();

  const handleSubmitMaterials = () => {
    isSelected1 ? setChoice1("Wooden Floor") : isSelected2 ? setChoice1("Carpet") : setChoice1("Floor tile"); 
    isSelected4 ? setChoice2("Wallpaper") : setChoice2("Paint");
    isSelected7 ? setChoice3("Inertia Radiator") : setChoice3("Fan Heater");
  }

  return (
    <div className="m">
      <div className="m-body">
        <h1> Que vais-je faire dans cette piece ? </h1>
        <div className="m-button-container">
          <button className="m-button" onClick={() => setShowButton(!showButton)}>
            Sol
          </button>
          {showButton ? (
            <div className='m-2'>
              <button className={isSelected1 ? "button-selected" : "button"} onClick={() => setIsSelected1(!isSelected1)}>Parquet</button>
              <button className={isSelected2 ? "button-selected" : "button"} onClick={() => setIsSelected2(!isSelected2)}>Moquette</button>
              <button className={isSelected3 ? "button-selected" : "button"} onClick={() => setIsSelected3(!isSelected3)}>Carrelage</button>
            </div>
          ) : null}
        </div>
        <div className="m-button-container2">
          <button className="m-button" onClick={() => setShowButton2(!showButton2)}>
            Mur
          </button>
          {showButton2 ? (
            <div className='m-2'>
              <button className={isSelected4 ? "button-selected" : "button"} onClick={() => setIsSelected4(!isSelected4)}>Papier peint</button>
              <button className={isSelected5 ? "button-selected" : "button"} onClick={() => setIsSelected5(!isSelected5)}>Peinture</button>
            </div>
          ) : null}
        </div>
        <div className="m-button-container3">
          <button className="m-button" onClick={() => setShowButton3(!showButton3)}>
            Eclairage
          </button>
          {showButton3 ? (
           <div className='m-2'>
              <button className={isSelected6 ? "button-selected" : "button"} onClick={() => setIsSelected6(!isSelected6)}>Luminaire</button>
            </div>
          ) : null}
        </div>
        <div className="m-button-container4">
          <button className="m-button" onClick={() => setShowButton4(!showButton4)}>
            Radiateur
          </button>
          {showButton4 ? (
            <div className='m-2'>
              <button className={isSelected7 ? "button-selected" : "button"} onClick={() => setIsSelected7(!isSelected7)}>Electrique</button>
              <button className={isSelected8 ? "button-selected" : "button"} onClick={() => setIsSelected8(!isSelected8)}>Radiateur à eau</button>
            </div>
          ) : null}
        </div>
        <div className="m-button-container5">
          <button className="m-button" onClick={() => setShowButton5(!showButton5)}>
            Literie
          </button>
          {showButton5 ? (
           <div className='m-2'>
              <button className={isSelected9 ? "button-selected" : "button"} onClick={() => setIsSelected9(!isSelected9)}>Lit</button>
              <button className={isSelected10 ? "button-selected" : "button"} onClick={() => setIsSelected10(!isSelected10)}>Matelat</button>
            </div>
          ) : null}
        </div>
        <div className="m-button-container6">
          <button className="m-button" onClick={() => setShowButton6(!showButton6)}>
            Rangement
          </button>
          {showButton6 ? (
            <div className='m-2'>
              <button className={isSelected11 ? "button-selected" : "button"} onClick={() => setIsSelected11(!isSelected11)}>Bac de rangement</button>
            </div>
          ) : null}
          <div className="Letsgo">
            <button className="button1" onClick={handleSubmitMaterials}>Let's Go</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
