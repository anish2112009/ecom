import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";

const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div className="box">
      <div className="signin">
        <a href="/signup">Create an account</a>
      </div>

      <div className="signup">
        <h2 id="signupp">Sign in</h2>
        <form action="/users/create_session" method="post">
          <div className="inpts">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="inpt"
            />
          </div>
          <div className="inpts">
            {" "}
            <input
              type="password"
              name="password"
              required
              placeholder="Enter Password"
              className="inpt"
            />
          </div>

          <div className="but">
            <input type="submit" value="Sign in" className="butt" />
            <button
              className="butt"
              id="goog"
              onClick={logGoogleUser}
              style={{ backgroundColor: "orangered", marginLeft: "34%" }}
            >
              Signin with google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
