import React from "react";
import './screentwo.css'
import Header from "../../Header/header";
import Tags from "../../Tags/tags";
import Cardcomponent from "../../Card/card";
import Statistics from "../../Statistics/statistics";
import Charousel from "../../Charousel/charousel";
import Buttons from "../../Buttons/ButtonsPageTwo/buttonspagetwo";
import Map from "../../Map/map";


const Screentwo = () => {
  return (
    <div>
      <div className="app-container">
        <Header />
        <div>
          <Tags />
        </div>
        <div className="card-stat-styling">
          <Cardcomponent />
          <Statistics />
        </div>
        <div className="img-charousel">
          <Map/>
          <Charousel />
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default Screentwo;
