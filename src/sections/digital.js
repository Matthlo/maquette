import marketingImg from "../assets/marketing-img.svg";
import data from "../data/data.json";
import "./main.css"

function Digital() {
    return (

        <div className="divMain">
            <div className="divMainLeft">
            <h1 className="otherTitle">{data.titleDigital}</h1>
                <p className="divMainText">{data.descDigital}</p>
                <p><img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" className="icon"/>{data.pointOne}</p>
                <p><img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" className="icon"/>{data.pointTwo}</p>
                <p><img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" className="icon"/>{data.pointTree}</p>
            </div>
            <div className="divMainRight">
                <img className="divMainImage" src={marketingImg} alt="marketingImg" />
            </div>
        </div>

    );
  }
  
  export default Digital;
  