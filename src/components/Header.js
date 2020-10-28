import React from "react";



import logo_mobile from './images/logo00.png';
import back from  './images/01_Background.png';
import shade from  './images/01_Shade.png';





//Basically using the header as a testable Action updater (Buttons)
function Header() {
  return (
    <div>
      <div className="HeaderPanel">
        <div className ="logo_mobile">
          <img top= "0" height="100%" width="100%" src={logo_mobile}  alt="Logo" />
        </div>
        <div className ="back_Title">
          <img  width="100%" height="100%" src={back} alt="back" />
        </div>
        <div  className ="shade_Title">
           <img  width="100%" height="100%" src={shade} alt="shade" />
        </div>
        <div  className ="shade_Title">
           <img  width="100%" height="100%" src={shade} alt="shade" />
        </div>
        <div className ="panel">
          <div>
            <h2> WEFI 2020 </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
//  HTML Button Example
//  <button onClick={(clickme) => Store.dispatch(togglePerspective())} />

export default Header;
