import React from 'react';

const buttonStyle = {
  position: 'absolute',
  zIndex: 100,
  bottom: 0,
  right: 'calc(98% - 120px)',
  width: '120px',
  height: '40px',
  backgroundColor: '#1f7cf4',
  color: '#FFFFFF',
  cursor: 'pointer',
  border: 0,
  borderRadius: '3px',
  fontSize: '12px',
  margin:'10px',
};

const Button = ({onClick, children}) => (
  <button style={buttonStyle} onClick={onClick}>{children}</button>
);

export default Button;
