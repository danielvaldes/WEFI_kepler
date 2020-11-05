import React from "react";
import './styles/styles.css';
import Store from '../store';

import ReactTooltip from "react-tooltip";
import back from  './images/01_Background.png';
import shade from  './images/01_Shade.png';



function ToolTip(toggle) {
  if(toggle)
  {
    let dir = ""
    let info = "2019 Rank: " + Store.getState().app.rank2019
    //used to adjust based on the length of the country
    let mySizeX = 90+((Store.getState().app.country.length)*70/32)+"%"

    if (Store.getState().app.rank2019 - Store.getState().app.rank !== 0) {
      if(Store.getState().app.rank2019 - Store.getState().app.rank > 0)
         dir = "RankUp";
      else
           dir = "RankDown";
    }

    //console.log("01_I need log mobile vs desktop")
    return (
      <div>
        <div className ="ToolTipGradient">
          <img width="100%" height="100%" src={back} alt="back" />
        </div>
        <div  className ="ToolTipShade">
           <img  width={mySizeX} height="120%"  src={shade} alt="shade" />
        </div>
        <div className ="ToolTipPanel">
          <div className="ToolTipDescription">
              <div>{Store.getState().app.classification}</div>
          </div>
          <div className ="ToolTipStatic">
            <ReactTooltip id="registerTip" place="right" effect="solid">
              {info}
            </ReactTooltip>
            <div><p>Country:</p></div>
            <div><p>Id:</p></div>
            <div><p>Rank:</p></div>
            <div><p>Index:</p></div>
          </div>
          <div className="ranked">
            <div data-tip data-for="registerTip" className={dir}></div>
          </div>
          <div className ="ToolTipDynamic">
            <div>{Store.getState().app.country}</div>
            <div>{Store.getState().app.id}</div>
            <div>{Store.getState().app.rank}</div>
            <div>{Store.getState().app.index}</div>
          </div>
        </div>
      </div>
    );
  }
  else {
  //  console.log("no more")
    return (
    <div>
    </div>
    );
  }
}

export default ToolTip;
