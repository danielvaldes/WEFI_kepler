import React from "react";
import './styles/styles.css';
import Store from '../store';

function ToolTip(toggle) {
  if(toggle)
  {
    return (
      <div className="panel">
        <h2> WEFI 2019 </h2>
        <main>Id:    <p>{Store.getState().app.id}</p></main>
        <main>Country:   <p>{Store.getState().app.country}</p></main>
        <main>Index: <p>{Store.getState().app.index}</p></main>
        <main>Rank:   <p>{Store.getState().app.rank}</p></main>
        <main>Classification: <p>{Store.getState().app.classification}</p></main>
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
