import React from "react";



//Dispatch Actions
import Store from '../store';
import { togglePerspective} from 'kepler.gl/actions';



//Basically using the header as a testable Action updater (Buttons)

function GetState()
{
  console.log(Store.getState())
}
function Toggle()
{
  Store.dispatch(togglePerspective())
  console.log("mono")
}

function randomFunct()
{
    console.log('after changing data: ', Store.getState())
}




function Header() {
  return (
    <header>
      <button onClick={GetState}>GetState</button>
      <button onClick={Toggle}>Toggle</button>
      <button onClick={randomFunct}>Add Data</button>
      <div className="triangleUp" />
      <div className="triangleDown" />
      <div className="rectangle" />
    </header>
  );
}
//  HTML Button Example
//  <button onClick={(clickme) => Store.dispatch(togglePerspective())} />


export default Header;
