import React from 'react'
const Button = ({ text, Color, onAdd }) => {
//   const consoleB = ()=>{
//     console.log('clicked');
// }
  return (
    <button style={{ backgroundColor: Color }} className="btn" onClick={onAdd}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  Color: "green",
  text: "Add",
};
export default Button;
