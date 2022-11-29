import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import "./App.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import sweety from "./sweetyblog.jpg";
const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      // when we are signing in with google go to dev tools and click on application where the values that are in local storage are available.
      setIsAuth(false);
      // after signout it will redirect to login page
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav>
        <div>
          <img
            src={sweety}
            height="60"
            width="auto"
            style={{ float: "left", borderRadius: "40px" }}
          />{" "}
          <p
            style={{
              float: "left",
              fontSize: "20px",
              fontStyle: "italic",
              marginLeft: "5px",
            }}
          >
            KIdzy
          </p>
        </div>

        <div className="align">
          <Link to="/"> Home </Link> &nbsp;
          <Link to="/CreatePost"> Create Post </Link> &nbsp;
          {!isAuth ? (
            <Link to="/login"> Login </Link>
          ) : (
            <>
              <button className="logoutbtn" style={{}} onClick={signUserOut}>
                Logout
              </button>
              &nbsp;
              {/*  if is auth is true then you will be logged in or else it will display the logout button */}
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/CreatePost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
};

export default App;
