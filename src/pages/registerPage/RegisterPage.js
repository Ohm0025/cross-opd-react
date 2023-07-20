import "./RegisterPage.css";
import { useState } from "react";

function RegisterPage() {
  const [typeaccount, setTypeaccount] = useState("");
  return (
    <div>
      <div className="register-header">Register Form</div>
      <div className="register-container">
        <div className="register-side">
          <div>
            <label htmlFor="userType" className="form-label">
              User Type
            </label>
            <select
              value={typeaccount}
              className="form-select"
              id="userType"
              onChange={(e) => setTypeaccount(e.target.value)}>
              <option value="">Select User Type</option>
              <option value="DOCTOR">Doctor</option>
              <option value="PATIENT">Patient</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div>
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
            />
          </div>
        </div>
        <div className="register-side">
          <div className={`${typeaccount ? "visible" : "invisible"}`}>
            <label
              htmlFor="numberId"
              className={`form-label ${typeaccount ? "" : "is-invalid"}`}>
              {typeaccount === "DOCTOR" ? "MD number" : "Citizen ID"}
            </label>
            <input type="number" className="form-control" id="numberId" />
          </div>
          <div>
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div>
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastname" />
          </div>
          <div>
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select className="form-select" id="gender">
              <option value="">Select Your Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
        </div>
      </div>
      <div className="register-action">
        <button className="register-button" type="button">
          Back
        </button>
        <button className="register-button" type="button">
          Submit
        </button>
      </div>
      <div className="register-footer container-fluid"></div>
    </div>
  );
}

export default RegisterPage;
