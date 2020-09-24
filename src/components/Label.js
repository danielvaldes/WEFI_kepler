import React from 'react';
import label from './images/RankLabel.png';
import './InfoPanel/panel-styles.css';

function Label() {
  return (
    <div className="label">
	   <img
      src={label}

      width={'50%'}
      mode='fit'
      alt="Label missing"
       />
       </div>
  );
}
export default Label;
