import React from "react";
import './screenfour.css'
import Header from "../../Header/header";
import Tags from "../../Tags/tags";
import Cardcomponent from "../../Card/card";
import Statistics from "../../Statistics/statistics";
import Charousel from "../../Charousel/charousel";
import Comments from "../../Comment/comment";
import ButtonsPageFour from "../../Buttons/ButtonsPageFour/buttonspagefour";
import Map from "../../Map/map";


const Screenfour = () => {
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
        <ButtonsPageFour />
      </div>
    </div>
  );
};

export default Screenfour;
