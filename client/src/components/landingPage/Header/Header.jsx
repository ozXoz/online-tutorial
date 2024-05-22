import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "../About/About";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import BecomeTutor from "../BecomeTutor/BecomeTutor";
import ApplyTutor from "../BecomeTutor/ApplyTutor/ApplyTutor";
import Benefits from "../Benefits/Benefits";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Payment from "../Signup/Payment";
import PayInfo from "../BecomeTutor/PayInfo/PayInfo";
import UserMainMenu from "../../registeredUsers/UserMainMenu";
import UserGetHelp from "../../registeredUsers/GetHelp";
import UserProfile from "../../registeredUsers/Profile";
import TutorBlogPost from "../../registeredTutors/BlogPost";
import TutorProfile from "../../registeredTutors/Profile";
import TutorHelpStudent from "../../registeredTutors/HelpStudent";
import TutorUpdateInformation from "../../registeredTutors/UpdateInformation";
import TutorMainMenu from "../../registeredTutors/TutorMainMenu";
import UserSignOut from "../../registeredUsers/SignOut";
import UserCloseAccount from "../../registeredUsers/CloseAccount";
import TutorSignOut from "../../registeredTutors/SignOut";
import TutorCloseAccount from "../../registeredTutors/CloseAccount";

import HomePage from "../../registeredTutors/ChatComponents/videoChatComponents/Home";
import RoomPage from "../../registeredTutors/ChatComponents/videoChatComponents/Room";
import UserBlogPost from "../../registeredUsers/BlogPost";
import UserUpdateInformation from "../../registeredUsers/UpdateInformation";

import styles from "./styles.module.css";

const Header = () => {
  // const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const [token, setToken] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (token) {
      setToken(data);
    }
  }, [token]);

  const login = () => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (user?.isStudent) {
      window.location.href = "/user/TutorMainMenu";
    } else if (user) {
      window.location.href = "/tutor/TutorMainMenu";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <BrowserRouter>
      <div className={styles.block}>
        <div className={styles.header}>
          <p>Online Tutoring Web Application</p>
        </div>
      </div>
      <div className={styles["flex-container"]}>
        <div className={styles.about}>
          <Link to="/About" style={
            {
              textDecoration:"none",
            }
          }>About</Link>
        </div>
        <div className={styles.features}>
          <Link to="/Features" style={
            {
              textDecoration:"none",
            }
          }>Features</Link>
        </div>
        <div className={styles.pricing}>
          <Link to="/Pricing" style={
            {
              textDecoration:"none",
            }
          }>Pricing</Link>
        </div>
        <div className={styles.benefits}>
          <Link to="/Benefits" style={
            {
              textDecoration:"none",
            }
          }>Benefits</Link>
        </div>
        <div className={styles.becomeTutor}>
          <Link to="/BecomeTutor" style={
            {
              textDecoration:"none",
            }
          }>Become Tutor</Link>
        </div>
        <div className={styles.register}>
          <Link to="/Signup" style={
            {
              textDecoration:"none",
            }
          }>Register Student</Link>
        </div>
        {token ? (
          <div className={styles.login} onClick={logout}>
            Logout
          </div>
        ) : (
          <div className={styles.login} onClick={login}>
            Login
          </div>
        )}
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user/Profile" element={<UserProfile />} />
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/BecomeTutor" element={<BecomeTutor />} />
        <Route path="/ApplyTutor" element={<ApplyTutor />} />
        <Route path="/PayInfo" element={<PayInfo />} />
        <Route path="/Benefits" element={<Benefits />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/ChatApp" element={<HomePage />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/user/TutorMainMenu" element={<UserMainMenu />} />
        <Route path="/user/GetHelp" element={<UserGetHelp />} />
        <Route path="/user/BlogPost" element={<UserBlogPost />} />
        <Route
          path="/user/UpdateInformation"
          element={<UserUpdateInformation />}
        />
        <Route path="/user/SignOut" element={<UserSignOut />} />
        <Route path="/user/CloseAccount" element={<UserCloseAccount />} />
        <Route path="/tutor/TutorMainMenu" element={<TutorMainMenu />} />
        <Route path="/tutor/HelpStudent" element={<TutorHelpStudent />} />
        <Route path="/tutor/BlogPost" element={<TutorBlogPost />} />
        <Route path="/tutor/Profile" element={<TutorProfile />} />
        <Route
          path="/tutor/UpdateInformation"
          element={<TutorUpdateInformation />}
        />
        <Route path="/tutor/SignOut" element={<TutorSignOut />} />
        <Route path="/tutor/CloseAccount" element={<TutorCloseAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
