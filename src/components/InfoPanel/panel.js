import React from 'react';
import './panel-styles.css';



import Header from './header';
import Footer from './footer';
import Stats from  './stats';
import label from  './images/rankLabel.png';

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
				<Header/>

				<img src={label} alt="Label" />

      	<button onClick= {() => swapData()}>
					click	</button>

				<p>Here I can probably include images and or labels</p>

				<button onClick= {() => swapData()}>
					click	</button>

      	<Footer/>
			</div>);
};

export default panel;
