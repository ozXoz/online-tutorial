import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {storage} from '../../firebase'
import axios from "axios";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import UserMainMenu from './UserMainMenu'

const Profile = () => {
    const navigate = useNavigate();
    const [profileInfo, setProfileInfo] = useState({
        name: '',
        bio: '',
        image: ''
    })
    const [file, setFile] = useState('')
    const [error, setErrors] = useState("");
    const handleChange = ({ currentTarget: input }) => {
        console.log(input.name )
        
        if (input.name == 'image' ){
            const file = input.files[0]
            setFile(input.files[0])
            console.log('input.files[0], input.files[0]', file.name)
            const strorageRef = ref(storage, `files/${file.name}`)
            const uploadTask = uploadBytesResumable(strorageRef, file)
            uploadTask.on("state_changed", (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

            }, 
            (error) => {
                alert(error)
            }, ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
                    console.log('downloadUrl', downloadUrl)
                    setProfileInfo({
                        ...profileInfo,
                        image: downloadUrl
                    })
                })
            })
        } else {
            setProfileInfo({ ...profileInfo, [input.name]: input.value });
        }
    };
    
      //"https://capstonefeb15.onrender.com/api/signup/tutor
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "https://t26-server.herokuapp.com/api/profile/create";
          const { data: res } = await axios.post(url, profileInfo);
          navigate("/TutorMainMenu");
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
      };

  return (
    <>
        <h1 className="page-title">Profile</h1>
            <br />
            <div className="component">
                <form onSubmit={handleSubmit} className="text-center">
                <div className="profile-pic">
                <label className="-label" htmlFor="file">
                    <span className="glyphicon glyphicon-camera" />
                    <span>Change Profile picture</span>
                </label>
                <input id="image" name="image" accept='image/*' type="file" onChange={handleChange} />
                <img src="../../public/imgs/Profile_Picture.jpg" id="output" width={200} />
                <br />
                </div>
                <br />
                
                <label htmlFor="name" className="form-name">
                    Name:{" "}
                </label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <br />
                <label htmlFor="bio" className="form-name">
                    Bio:{" "}
                </label>
                <textarea
                    id="bio"
                    name="bio"
                    rows={20}
                    cols={50}
                    defaultValue={"Enter bio"}
                    onChange={handleChange}
                />
                <br />
                <input className="btn btn-primary" type="submit" defaultValue="save" />
                <a className="btn btn-primary" role="button">
                    <Link to="/">Cancel</Link>
                </a>
                </form>
            </div>
            <Routes>
                <Route path="/" element={<UserMainMenu />}/>
            </Routes>
        
    </>
  )
}

export default Profile