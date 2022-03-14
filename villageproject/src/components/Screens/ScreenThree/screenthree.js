import React from "react";
import './screenthree.css'
import Header from "../../Header/header";
import Tags from "../../Tags/tags";
import Cardcomponent from "../../Card/card";
import Statistics from "../../Statistics/statistics";
import Charousel from "../../Charousel/charousel";
import Comments from "../../Comment/comment";
import ButtonsPageThree from "../../Buttons/ButtonsPageThree/buttonspagethree";
import Map from "../../Map/map";


const Screenthree = () => {
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
        <Comments />
        <ButtonsPageThree />
      </div>
    </div>
  );
};

export default Screenthree;
