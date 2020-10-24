import React from "react";
import './styles/styles.css';
import Store from '../store';

import ReactTooltip from "react-tooltip";

function changeBackground(e) {
   e.target.style.background = 'red';
 }
function ToolTip(toggle) {
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



    return (
      <div className="panel">
        <ReactTooltip id="registerTip" place="top" effect="solid">
          {info}
        </ReactTooltip>
        <h2> WEFI 2020 </h2>
        <main>Rank: <div className={len} data-tip data-for="registerTip"></div>
          <p>{Store.getState().app.rank} </p>
        </main>
        <main>Id:    <p>{Store.getState().app.id}</p></main>
        <main>Country:   <p>{Store.getState().app.country}</p></main>
        <main>Index: <p>{Store.getState().app.index}</p></main>


        <p>{Store.getState().app.classification}</p>
      </div>
    );
  }
  else {
    return (
      <div></div>
    );
  }
}


export default ToolTip;
