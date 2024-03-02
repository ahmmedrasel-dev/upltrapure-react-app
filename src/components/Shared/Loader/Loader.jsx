import "./loader.css";
import logo from "../../../assets/images/logo.png";

const Loader = () => {
  return (
    <div className="container">
      <div className="main">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Loader;
