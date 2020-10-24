import React from "react";


//Dispatch Actions
import Store from '../store';
import { togglePerspective} from 'kepler.gl/actions';



function Toggle()
{
  Store.dispatch(togglePerspective())
}


//Basically using the header as a testable Action updater (Buttons)
function Header() {
  return (
    <header>
      <button onClick={Toggle}>Toggle</button>

    </header>
  );
}
//  HTML Button Example
//  <button onClick={(clickme) => Store.dispatch(togglePerspective())} />

export default Header;
