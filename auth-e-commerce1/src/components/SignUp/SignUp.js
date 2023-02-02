import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords did not matched!");
      return;
    }
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setError(
        '"Full-fill the requirements for password: an alphabet of both case, a number, a special character ,at least 8 character"'
      );
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailBlur} type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            onBlur={handleConfirmPasswordBlur}
            type="password"
            name="confirm-password"
            required
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account ? <Link to="/login">login</Link>
      </p>
    </div>
  );
};

export default SignUp;
