import { useState } from "react";
import data from "../data/data.json";

function Contact() {
  const [dataForm, setDataForm] = useState({ name: "", email: "" });

  function handleChange(e) {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(params) {
    console.log("submit");
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          {data.titleForMail}
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <button type="submit">{data.buttonForMail}</button>
      </p>
    </form>
  );
}

export default Contact;
