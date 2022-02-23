import images from "../assets/logo.png";
import "./header.css";

function Header() {
  return (
    <div className="divHeader">
      <img src={images} alt="Logo" />
    </div>
  );
}

export default Header;
