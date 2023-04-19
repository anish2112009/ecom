import React from "react";

const Signin = () => {
  return (
    <div class="box">
      <div class="signin">
        <a href="/signup">Create an account</a>
      </div>

      <div class="signup">
        <h2 id="signupp">Sign in</h2>
        <form action="/users/create_session" method="post">
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

          <div class="but">
          
            <input type="submit" value="Sign in" class="butt" />
            <button className="butt" id="goog" style={{backgroundColor: 'orangered',marginLeft:'34%'}}>Signin with google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
