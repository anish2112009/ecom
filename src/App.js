import Home from "./routes/home/Home.component.js";
import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./routes/pagenotfound/Pagenotfound.js";
import Navbar from "./routes/navbar/Navbar.component.js";
import Signup from "./routes/signup/Signup.js";
import Signin from "./routes/signin/Signin.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<h1>shop</h1>} />

          <Route path="cart" element={<h1>signin</h1>} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
};

export default App;
