import images from "../assets/logo.png"
import data from "../data/data.json"
import "./footer.css"

function Footer() {
  return (
    <div className="separator">
    <img src={images} alt="Logo" />
    <div className="divFooter">
      <p>{data.license}</p>
    </div>
    </div>
  );
}

export default Footer;