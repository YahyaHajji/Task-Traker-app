import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  // const console = ()=>{
  //         alert('clicked');
  // }
  return (
    <header className="header">
      <h1> {title} </h1>
      {location.pathname === '/' && (
        <Button
          Color={showAdd ? "red" : "green"}
          text={showAdd ? "close" : "Add"}
          onAdd={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// css in JS
// const H1Style = {
//     color:'red',
//     backgroundColor: 'black',
// }

export default Header;
