import { useRegister } from "../../../../../contexts/RegisterContext";
import "./GeneralDataBox.css";
import { isEmpty } from "lodash";

function GeneralDataBox() {
  const { input, handleChangeInput, errorObj } = useRegister();

  return (
    <div className="databox-container">
      <div className="databox-side">
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              !isEmpty(errorObj?.email) ? "input-error" : ""
            }`}
            value={input.email}
            id="email"
            name="email"
            onChange={handleChangeInput}
          />
          <small
            className={`error-message ${
              isEmpty(errorObj?.email) ? "d-none" : ""
            }`}
          >
            {errorObj?.email.required ||
              errorObj?.email.valid ||
              errorObj?.email.other}
          </small>
        </div>

        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              errorObj?.password?.required ? "input-error" : ""
            }`}
            value={input.password}
            id="password"
            name="password"
            onChange={handleChangeInput}
          />
          <small
            className={`error-message ${
              !errorObj?.password?.required ? "d-none" : ""
            }`}
          >
            {errorObj?.password?.required}
          </small>
        </div>
        <div>
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${
              errorObj?.password?.confirm || errorObj?.password?.equal
                ? "input-error"
                : ""
            }`}
            value={input.confirmpass}
            id="confirmpassword"
            name="confirmpass"
            onChange={handleChangeInput}
          />
          <small
            className={`error-message ${
              !(errorObj?.password?.confirm || errorObj?.password?.equal)
                ? "d-none"
                : ""
            }`}
          >
            {errorObj?.password?.confirm || errorObj?.password?.equal}
          </small>
        </div>
      </div>
      <div className="databox-side">
        <div>
          <label htmlFor="birthdate" className="form-label">
            BirthDate
          </label>

          <input
            type="date"
            className={`form-control ${
              errorObj?.date?.required ? "input-error" : ""
            }`}
            id="birthdate"
            value={input.birthDate}
            name="birthDate"
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
          <small
            className={`error-message ${
              !errorObj?.date?.required ? "d-none" : ""
            }`}
          >
            {errorObj?.date?.required}
          </small>
        </div>
        <div>
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className={`form-control ${
              errorObj?.firstName?.required ? "input-error" : ""
            }`}
            value={input.firstName}
            id="firstname"
            name="firstName"
            onChange={handleChangeInput}
          />
          <small
            className={`error-message ${
              !errorObj?.firstName?.required ? "d-none" : ""
            }`}
          >
            {errorObj?.firstName?.required}
          </small>
        </div>
        <div>
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className={`form-control ${
              errorObj?.lastName?.required ? "input-error" : ""
            }`}
            value={input.lastName}
            id="lastname"
            name="lastName"
            onChange={handleChangeInput}
          />
          <small
            className={`error-message ${
              !errorObj?.lastName?.required ? "d-none" : ""
            }`}
          >
            {errorObj?.lastName?.required}
          </small>
        </div>
        <div>
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className={`form-control ${
              !isEmpty(errorObj?.gender) ? "input-error" : ""
            }`}
            id="gender"
            value={input.gender}
            name="gender"
            onChange={handleChangeInput}
          >
            <option value="">Select Your Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          <small
            className={`error-message ${
              isEmpty(errorObj?.gender) ? "d-none" : ""
            }`}
          >
            {errorObj?.gender?.required || errorObj?.gender?.valid}
          </small>
        </div>
      </div>
    </div>
  );
}

export default GeneralDataBox;
