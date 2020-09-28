import React from "react";



//Dispatch Actions
import Store from '../store';
import { togglePerspective} from 'kepler.gl/actions';
import {set_data_action} from '../store/Reducers'


//Basically using the header as a testable Action updater (Buttons)

function GetState()
{
  console.log(Store.getState())
}
function Toggle()
{
  Store.dispatch(togglePerspective())
}

function randomFunct()
{

  Store.dispatch(set_data_action(Store.getState()))
    console.log('after changing data: ', Store.getState())
}




function Header() {
  return (
    <header>
      <button onClick={GetState}>GetState</button>
      <button onClick={Toggle}>Toggle</button>
      <button onClick={randomFunct}>Add Data</button>
    </header>
  );
}
//  HTML Button Example
//  <button onClick={(clickme) => Store.dispatch(togglePerspective())} />


export default Header;
