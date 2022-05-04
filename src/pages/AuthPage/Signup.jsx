import "./auth.css";
import { Navigation, Footer } from "components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import axios from "axios";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confPassword: "",
  });

  const formHandler = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const { authData, setAuthData } = useAuth();
  const navigate = useNavigate();

  async function SignupHandler(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: `/api/auth/signup`,
        headers: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.emailAddress,
          password: formData.password,
        },
      });
      const {
        status,
        data: { encodedToken, foundUser },
      } = response;
      if (status === "200") {
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("user", JSON.stringify(foundUser));
        setAuthData({
          ...authData,
          isAuthenticated: true,
          user: foundUser,
          token: encodedToken,
        });
      }
    } catch (errorMsg) {
      console.error(errorMsg);
    } finally {
      navigate("/");
    }
  }

  useEffect(() => {
    document.title = "Padhaku | Signup";
  }, []);
  return (
    <>
      <Navigation />
      <main className="signup flex justify--center p--y-2">
        <div className="card p--3 m--y-2">
          <h2 className="h--2">Register an account</h2>
          <form action="POST" className="flex flex__dir--col align--center">
            <label className="label--text text--sbold">First Name</label>
            <div className="input__container m--y-0-5">
              <input
                className="input input--text"
                type="text"
                placeholder="First Name"
                onInput={(e) => formHandler("firstName", e.target.value)}
                required
              />
            </div>

            <label className="label--text text--sbold">Last Name</label>
            <div className="input__container m--y-0-5">
              <input
                className="input input--text"
                type="text"
                placeholder="Last Name"
                onInput={(e) => formHandler("lastName", e.target.value)}
              />
            </div>

            <label className="label--text text--sbold">Email Address</label>
            <div className="input__container m--y-0-5">
              <input
                className="input input--text"
                type="email"
                placeholder="frequentbuyer@xmail.com"
                onInput={(e) => formHandler("emailAddress", e.target.value)}
                required
              />
            </div>

            <label className="label--text text--sbold">Password</label>
            <div className="input__container flex flex__dir--row items--center justify--around m--y-0-5">
              <input
                className="input input--text"
                type={passwordVisible ? "text" : "password"}
                placeholder="*********"
                onChange={(e) => formHandler("password", e.target.value)}
                required
              />
              <span onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? (
                  <i className="fa fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa fa-solid fa-eye"></i>
                )}
              </span>
            </div>

            <label className="label--text text--sbold">Confirm Password</label>
            <div className="input__container m--y-0-5">
              <input
                className="input input--text"
                type="password"
                placeholder="*********"
                onChange={(e) => formHandler("confPassword", e.target.value)}
                required
              />
            </div>
            <div className="input__container--row m--y-0-5">
              <input id="terms-conditions__check" type="checkbox" required />
              <label htmlFor="terms-conditions__check" className="label--text">
                I accept all
                <Link
                  to="/terms-conditions"
                  className="terms-conditions m--0-5"
                >
                  terms and conditions
                </Link>
              </label>
            </div>

            <button
              className="btn btn--primary p--1"
              disabled={
                formData.password.length < 8 ||
                formData.password !== formData.confPassword
              }
              onClick={(e) => {
                SignupHandler(e);
              }}
            >
              Register
            </button>
          </form>

          <p className="m--y-1 login-link">
            <Link to="/login">Already have an account?</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
