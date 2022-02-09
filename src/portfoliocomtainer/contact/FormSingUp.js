import React from "react";
import "./Form.css";
import useForm from "./useForm";
import validate from "./validateInfo";
const FormSingUp = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <div className="FormSingUpMainDiv">
      <form className="FormSingUpMainForm">
        <h1 className="FormSingUpHOne">Contact Information</h1>
        <hr className="hrAboutMe" />
        <div className="FormSingUpInputsDiv">
          <label className="FormSingUpLabel" htmlFor="Username">
            Username
          </label>
          <input
            id="Username"
            className="FormSingUpInputsDiv"
            type="text"
            name="userrname"
            placeholder="Enter Your Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="FormSingUpInputsDiv">
          <label className="FormSingUpLabel" htmlFor="Email">
            Email
          </label>
          <input
            id="mail"
            className="FormSingUpInputsDiv"
            type="email"
            name="email"
            placeholder="Enter Your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="FormSingUpInputsDiv">
          <label className="FormSingUpLabel" htmlFor="Passsword">
            Passsword
          </label>
          <input
            id="Password"
            className="FormSingUpInputsDiv"
            type="Password"
            name="Password"
            placeholder="Enter Your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="FormSingUpInputsDiv">
          <label className="FormSingUpLabel" htmlFor="Confirn Passsword">
            Confirn Passsword
          </label>
          <input
            id="Confirn Password"
            className="FormSingUpInputsDiv"
            type="Password"
            name="password2"
            placeholder="Enter Your Confirn password"
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <button className="formButtonOne" type="submit">
          Form Sign Up
        </button>
        <span>
          Already have an account? Login<a href="#">Here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSingUp;
