import "./main.css"
import data from "../data/data.json"
import "../components/button.css"

function Contact() {
  return (
    <div>
    <div className="otherTitle">
    <p>{data.titleContact}</p>
    </div>
    <p className="divMainText">{data.desctContact}</p>
    <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"/>
          <p>
            <label><input type="Mail" name="email" placeholder={data.placeholderMail} className="buttonContours" /></label>
            <button type="submit" className="buttonCircle">{data.buttonForMail}</button>
          </p>
        </form>
        </div>
  );
}

export default Contact;
