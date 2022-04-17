import "./auth.css";
import { Navigation, Footer } from "components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    document.title = "Padhaku | Login";
  }, []);
  return (
    <>
      <Navigation />
      <main className="login flex flex--center">
        <div className="card p--3 m--y-1">
          <h2 className="h--2">Login</h2>
          <form action="POST" className="flex flex__dir--col align--center">
            <label className="label--text text--sbold">Email Address</label>
            <div className="input__container m--y-0-5">
              <input
                className="input input--text"
                type="email"
                placeholder="frequentbuyer@xmail.com"
                required
              />
            </div>

            <label className="label--text text--sbold">Password</label>
            <div className="input__container flex flex__dir--row items--center m--y-0-5">
              <input
                className="input input--text"
                type={passwordVisible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*********"
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
            <div className="input__container--row m--y-0-5">
              <input id="remember-me" type="checkbox" />
              <label className="label--text" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <button
              className="btn btn--primary p--1"
              disabled={password.length < 8}
              type="submit"
            >
              Login
            </button>
          </form>

          <p className="m--y-1 signup-link">
            <Link to="/signup">New user? Create an account here</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
