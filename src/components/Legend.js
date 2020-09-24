import React from 'react';
import legend from './images/RankLegend.png';
import './InfoPanel/panel-styles.css';

function Legend() {
  return (
    <div className="legend">
	   <img
      src={legend}
      width={'60%'}
      mode='fit'
      alt="Label missing"
       />
       </div>
  );
}
export default Legend;
