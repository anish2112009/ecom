import React from "react";
import "./signup.scss";

const Signup = () => {
  return (
    <div class="box">
      <div class="signin">
        <a href="/signin">Already a member</a>
      </div>

      <div class="signup">
        <h2 id="signupp">Sign up</h2>
        <form action="/users/create_user" method="POST">
          <div class="inpts">
            {" "}
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              class="inpt"
            />{" "}
          </div>
          <div class="inpts">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              class="inpt"
            />
          </div>
          <div class="inpts">
            {" "}
            <input
              type="password"
              name="password"
              required
              placeholder="Enter Password"
              class="inpt"
            />
          </div>
          <div class="inpts">
            {" "}
            <input
              type="password"
              name="c_password"
              required
              placeholder="Re-enter Password"
              class="inpt"
            />
          </div>
          <div class="but">
            {" "}
            <input type="submit" value="SignUp" class="butt" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
