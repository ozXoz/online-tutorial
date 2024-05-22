import React ,  {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import "./UserUpdateInformation.css";

const UpdateInformation = () => {
    const[value, setValue] = React.useState('province');
    const [error, setErrors] = useState("");
    const [user, setUser] = useState()
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setUser({ ...user, [input.name]: input.value });
    };

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();
        console.log("update")
        try {
            const url = "https://t26-server.herokuapp.com/api/user/update";
            const { data: res } = await axios.post(url, user);
            
            
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
        <h1 className="page-title">Update Information</h1>
            <br />
            <div className="component text-center" >
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="firstname" className="form-name">First Name: </label>
                    <input type="text" id="firstname" name="firstname" onChange={handleChange}/>

                    <label htmlFor="lastname" className="form-name">Last Name: </label>
                    <input type="text" id="lastname" name="lastname" onChange={handleChange}/>

                    <label htmlFor="address" className="form-name">Address: </label>
                    <input type="text" id="address" name="address" onChange={handleChange}/>

                    <label htmlFor="city" className="form-name">City: </label>
                    <input type="text" id="city" name="city" onChange={handleChange}/>

                    <label htmlFor="province" className="form-name">Province: </label>
                    <input type="text" id="province" name="province" onChange={handleChange}/>

                    <label htmlFor="postalCode" className="form-name">Postal Code: </label>
                    <input type="text" id="postalCode" name="postalCode" onChange={handleChange}/>

                    <label htmlFor="country" className="form-name">Country: </label>
                    <input type="text" id="country" name="country" onChange={handleChange}/>

                    <label htmlFor="email" className="form-name">Email: </label>
                    <input type="email" id="email" name="email" onChange={handleChange}/>

                    <label htmlFor="password" className="form-name">Password: </label>
                    <input type="password" id="password" name="password" onChange={handleChange} />

                    <label htmlFor="cpassword" className="form-name">Confirm Password: </label>
                    <input type="password" id="cpassword" name="cpassword" onChange={handleChange}/>

                    <label htmlFor="cardName" className="form-name">Credit Card Name: </label>
                    <input type="text" id="cardName" name="cardName" onChange={handleChange}/>

                    <label htmlFor="cardNumber" className="form-name">Credit Card Number: </label>
                    <input type="text" id="cardNumber" name="cardNumber" onChange={handleChange}/>

                    <label htmlFor="cardExpMonth" className="form-name">Exp Month: </label>
                    <input type="text" id="cardExpMonth" name="cardExpMonth" onChange={handleChange}/>

                    <label htmlFor="cardExpYear" className="form-name">Exp Year: </label>
                    <input type="text" id="cardExpYear" name="cardExpYear" onChange={handleChange}/>

                    <label htmlFor="cardExpCVV" className="form-name">CVV: </label>
                    <input type="text" id="cardExpCVV" name="cardExpCVV" />
                    <input className="btn btn-primary" type="submit" defaultValue="Update info" />
                    <a className="btn btn-primary" role="button"><Link to="/user/TutorMainMenu">Cancel</Link></a>
                </form>

            </div>
    </>
  )
}

export default UpdateInformation