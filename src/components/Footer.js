import React from "react";
import './styles/styles.css';

//Image
import legend from './images/RankLegend.png';

function Footer() {
  return (
    <div className="footer">
      <div className="waterMark">
        <p> © Foundation for the Advancement of Liberty:</p>
        <p> WEFI 2020</p>
        <p>Dataviz by Advent GX</p>
      </div>
      <br></br>
      <div className="legend">
       <img
        src={legend}
        width={'65%'}
        mode='fit'
        alt="Label missing"
         />
      </div>
    </div>
  );
}


export default Footer;
