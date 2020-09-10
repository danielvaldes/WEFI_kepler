import React from 'react';
import './panel-styles.css';



import Header from './header';
import Footer from './footer';
import Stats from './stats';
import label from './images/rankLabel.png';

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
						<img src={label} alt="Rank Range Image missing" />
						<button onClick= {() => swapData()}>
							click
						</button>

						<Stats/>

						<view style = {{flex: 3, justifyContent: 'space-between', flexDirection: 'column'}}>
							<view style = {{flex: 1, backgroundColor: 'blue'}}>
							<br></br>I want to add Data
							</view>
							<view style = {{flex: 1, backgroundColor: 'red'}}>
							<br></br>Maybe have queues
							</view>
							<view style = {{flex: 1, backgroundColor: 'green'}}>
							<br></br>or just images of countries and stats
							</view>
						</view>
						<p>Here I can probably include images and or labels</p>


						<button onClick= {() => swapData()}>
							click
						</button>
				<Footer/>
			</div>);
};

export default panel;
