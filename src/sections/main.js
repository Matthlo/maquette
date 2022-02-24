import headerImg from "../assets/banner.png";
import Card from "../components/card";
import data from "../data/data.json";
import "./main.css";
import "../components/button.css"

function Main() {
  return (
    <div className="global">
    <div className="divMain">
      <div className="divMainLeft">
        <h1 className="headerTitle">{data.title}</h1>
        <p className="divMainText">{data.description}</p>
        <button className="button">GET STARTED</button>
      </div>
      
      <div className="divMainRight">
        <img className="divMainImage" src={headerImg} alt="headerImg" />
      </div>
    </div>
    </div>
  );
}

export default Main;
