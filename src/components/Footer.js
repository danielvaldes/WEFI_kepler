import React from "react";
import './styles/styles.css';

//Image
import legend from './images/legendGradient.png';

function Footer() {
  let waterMark = '25%'
  if(/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent))
  {
    console.log("here on a mobile")
    waterMark = "waterMark_Mobile"
  }
  else {
    console.log("here on a Desktop")
    waterMark = "waterMark_Desktop"
  }


  return (
    <div className="footer">
      <div className={waterMark}>
        <p>   ©<a href="http://www.fundalib.org"> Foundation for the Advancement of Liberty:</a> </p>
        <p> WEFI 2020</p>
        <p>Dataviz by
          <a href="https://iu.adventgx.com"> Advent GX</a>
        </p>
      </div>
      <br></br>
      <div className="legend">
       <img
        src={legend}
        width= {'100%'}
        mode='fit'
        alt="Label missing"
         />
      </div>
      <div className="legendInfo">
       <p style={{textAlign: 'left'}}>Remarkably low electoral freedom</p>
       <p style={{textAlign: 'right'}}>Outstanding electoral freedom</p>
      </div>

    </div>

  );
}


export default Footer;
