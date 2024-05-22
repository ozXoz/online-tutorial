import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BlogPost from './BlogPost';
import Profile from './Profile';
import UpdateInformation from './UpdateInformation';
import HelpStudent from './HelpStudent';
import CloseAccount from './CloseAccount';
import ChatApp from './ChatApp';
import "./TutorMainMenu.css"

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

const TutorMainMenu = () => {
    const navigate = useNavigate();
    const [error, setErrors] = useState("");
    const onSignout = async () => {
        try {
          const url = "https://t26-server.herokuapp.com/api/tutor/signout";
          const { data: res } = await axios.get(url);
          localStorage.clear();
          navigate("/");

        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500
          ) {
            setErrors(error.response.data);
            console.log(error.response);
          }
        }
    }

    const onCloseAccount = async () => {
        try {
            const url = "https://t26-server.herokuapp.com/api/tutor/delete";
            console.log("onCloseAccount")
            const user = JSON.parse(localStorage.getItem('user'))

            console.log("user", user)
            const { data: res } = await axios.delete(url, {data: {email : user.email}});
            localStorage.clear();
            navigate("/");
          } catch (error) {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status < 500
            ) {
              setErrors(error.response.data);
              console.log(error.response);
            }
          }
    }

  return (
        <>
            {/* <BrowserRouter> */}
                <h1 className="page-title">Welcome back Tutor</h1>
                <br />
                <div className="component justify-content-center">
                    <table className="main-menu">
                    <tbody>
                        <tr>
                        <td className="profile bg-green">
                            <a className="student-menu-text">
                            <Link className='text-white' to="/tutor/Profile">Profile</Link>
                            </a>
                        </td>
                        <td className="get-help bg-orange">
                            <a className="student-menu-text" href="">
                            <Link className='text-white' to="/tutor/HelpStudent">Help Student</Link>
                            </a>
                        </td>
                        <td className="blog-post bg-silver">
                            <a className="student-menu-text">
                            <Link  className='text-white' to="/tutor/BlogPost">Blog Post</Link>
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="sign-out bg-light-pink">
                            <a className="student-menu-text" href="">
                            <Link className='text-white' onClick={onSignout}>Sign Out</Link>
                            </a>
                        </td>
                        <td className="update-information bg-blue-green">
                            <a
                            className="student-menu-text"
                            ><Link to="/tutor/UpdateInformation" className='text-white'>
                            Update Information
                            </Link>
                            </a>
                        </td>
                        <td className="close-account bg-red">
                            <a className="student-menu-text" href="">
                            <Link className='text-white' onClick={onCloseAccount}>Close Account</Link>
                            </a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                {/* <Routes>
                    <Route path="/Profile" element={<Profile />}/>
                    <Route path="/BlogPost" element={<BlogPost />}/>
                    <Route path="/UpdateInformation" element={<UpdateInformation />}/>
                    <Route path="/GetHelp" element={<GetHelp />}/>
                    <Route path="/CloseAccount" element={<CloseAccount />}/>
                </Routes> */}
            {/* </BrowserRouter> */}

        </>
  )
}

export default TutorMainMenu