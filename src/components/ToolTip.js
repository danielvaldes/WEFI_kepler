import React from "react";
import './styles/styles.css';
import Store from '../store';

import ReactTooltip from "react-tooltip";
import back from  './images/01_Background.png';
import shade from  './images/01_Shade.png';



function ToolhTip(toggle) {
  if(toggle)
  {
    let len = ""
    let  info = "2019 Rank: " + Store.getState().app.rank2019

    if(Store.getState().app.rank2019 - Store.getState().app.rank > 0)
    {
       len = "triangleUp";
    }
    else {
         len = "triangleDown";
    }
    //console.log("01_I need log mobile vs desktop")
    return (
    <div>
      <div className="ToolTipPanel">
        <div className ="back_ToolTip">
          <img width="100%" height="100%" src={back} alt="back" />
        </div>
        <div  className ="shade_ToolTip">
           <img  width="100%" height="100%"  src={shade} alt="shade" />
        </div>
        <div  className ="shade_ToolTip">
           <img  width="100%" height="100%"  src={shade} alt="shade" />
        </div>

        <div className ="panel">
          <div className="classif">
              <div>{Store.getState().app.classification}</div>
          </div>
          <div className ="static">
            <ReactTooltip id="registerTip" place="right" effect="solid">
              {info}
            </ReactTooltip>
            <div><p>Rank:</p></div>
            <div><p>Index:</p></div>
            <div><p>Id:</p></div>
            <div><p>Country:</p></div>
          </div>
          <div className="ranked">
            <div data-tip data-for="registerTip" className={len}></div>
          </div>
          <div className ="dymo">
            <div data-tip data-for="registerTip">{Store.getState().app.rank}</div>
            <div>{Store.getState().app.index}</div>
            <div>{Store.getState().app.id}</div>
            <div>{Store.getState().app.country}</div>
            </div>
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

export default ToolhTip;
