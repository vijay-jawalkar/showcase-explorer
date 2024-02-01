import React from "react";
import { useNavigate } from "react-router";

export function Form({ setIsForm, show }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const userInfo = {
      show: event.target.show.value,
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      contact: event.target.contact.value,
      address: event.target.address.value,
    };

    sessionStorage.setItem("userData", JSON.stringify(userInfo));
    navigate("/");
  }

  return (
    <div className="form-position">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">Welcome</div>

        <div className="subtitle">Let's book your ticket!</div>

        <div className="input-container">
          <label for="show">Show Name</label>
          <input id="show" className="input" type="text" value={show.name} />
        </div>

        <div className="input-container">
          <label for="fullname">Full Name</label>
          <input
            id="fullname"
            className="input"
            type="text"
            placeholder="Your Fullname"
            required
          />
        </div>

        <div className="input-container">
          <label for="email">Email</label>
          <input
            id="email"
            className="input"
            type="email"
            placeholder="Your email"
            required
          />
        </div>

        <div className="input-container">
          <label for="contact">Contact Number</label>
          <input
            id="contact"
            className="input"
            type="text"
            placeholder="Your contact number"
          />
        </div>

        <div className="input-container">
          <label for="address">Address</label>
          <input
            id="address"
            className="input"
            type="text"
            placeholder="Your address"
            required
          />
        </div>

        <button type="text" className="submit">
          submit
        </button>
        <div onClick={() => setIsForm(false)} className="cancel-form">
          ❌
        </div>
      </form>
    </div>
  );
}
