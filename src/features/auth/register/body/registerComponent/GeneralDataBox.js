import { useState } from "react";
import { useRegister } from "../../../../../contexts/RegisterContext";
import "./GeneralDataBox.css";

function GeneralDataBox() {
  const { input, handleChangeInput } = useRegister();
  const [date, setDate] = useState("none");

  return (
    <div className="databox-container">
      <div className="databox-side">
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={input.email}
            id="email"
            name="email"
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={input.password}
            id="password"
            name="password"
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={input.confirmpass}
            id="confirmpassword"
            name="confirmpass"
            onChange={handleChangeInput}
          />
        </div>
      </div>
      <div className="databox-side">
        <div>
          <label htmlFor="birthdate" className="form-label">
            BirthDate
          </label>
          <input
            type="date"
            className="form-control"
            id="birthdate"
            value={date}
            name="birthDate"
            onChange={(e) => {
              setDate(e.target.value);
              handleChangeInput(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            value={input.firstName}
            id="firstname"
            name="firstName"
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            value={input.lastName}
            id="lastname"
            name="lastName"
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            value={input.gender}
            name="gender"
            onChange={handleChangeInput}
          >
            <option value="">Select Your Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default GeneralDataBox;
