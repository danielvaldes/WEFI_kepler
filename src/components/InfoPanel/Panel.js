import React from 'react';
import './panel-styles.css';



import PanelHeader from './PanelHeader';
import PanelFooter from './PanelFooter';
import Stats from './Stats';

//prompt does not behave properly
function swapData () {
  return (
    <div>
      <script>
        ans = prompt("you have clicked me, what shall I do? ")
        if(ans)
        {
          alert("I am a button, \nwhat shall I do?")
        }
        </script>
    </div>
  )
}

const panel = () => {

		return (
			<div className="panel">
				<PanelHeader/>
				<button onClick= {() => swapData()}>
					click
				</button>
				<p>Here I can probably include images and or labels</p>
        <Stats/>
				<button onClick= {() => swapData()}>
					click
				</button>
				<PanelFooter/>
			</div>);
};

export default panel;
