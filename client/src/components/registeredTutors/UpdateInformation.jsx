import React from 'react';
import "./TutorUpdateInformation.css"
import {Link} from "react-router-dom";

const UpdateInformation = () => {
    const[value, setValue] = React.useState('province');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
  return (
    <>
        <h1 className="page-title">Update Information</h1>
            <br />
            <div className="component">
              <form>
                <label htmlFor="fname" className="form-name">First Name: </label>
                <input type="text" id="fname" name="fname" />

                <label htmlFor="lname" className="form-name">Last Name: </label>
                <input type="text" id="lname" name="lname" />

                <label htmlFor="address" className="form-name">Address: </label>
                <input type="text" id="address" name="address" />

                <label htmlFor="city" className="form-name">City: </label>
                <input type="text" id="city" name="city" />

                <label htmlFor="province" className="form-name">Province: </label>
                <input type="text" id="province" name="province" />

                <label htmlFor="pcode" className="form-name">Postal Code: </label>
                <input type="text" id="pcode" name="pcode" />

                <label htmlFor="country" className="form-name">Country: </label>
                <input type="text" id="country" name="country" />

                <label htmlFor="email" className="form-name">Email: </label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password" className="form-name">Password: </label>
                <input type="password" id="password" name="password" />

                <label htmlFor="cpassword" className="form-name">Confirm Password: </label>
                <input type="password" id="cpassword" name="cpassword" />

                <label htmlFor="transitN" className="form-name">Transit Number: </label>
                <input type="text" id="transitN" name="transitN" />

                <label htmlFor="accN" className="form-name">Account Number: </label>
                <input type="text" id="accN" name="accN" />

                <label htmlFor="branchN" className="form-name">Branch Number: </label>
                <input type="text" id="branchN" name="branchN" />

                <input className="btn btn-primary" type="submit" defaultValue="Update info" />
                  <a className="btn btn-primary" role="button"><Link to="/tutor/TutorMainMenu">Cancel</Link></a>
              </form>
            </div>
    </>
  )
}

export default UpdateInformation