import React from 'react'
import { Link } from "react-router-dom";
import  "./BecomeTutor.css";

const BecomeTutor = () => {
  return (
    <>
      <div className="tutor__main">
        <h1 className="tutor_main">Become Tutor</h1>
        <h2 className='tutor_point'>Have fun helping students succeed on your own schedule</h2>
        <h2 className='tutor_point'>You are in the right place</h2>
        <h2 className='tutor_point'>Get paid $500 dollars per tutoring session</h2>
        <Link to='/ApplyTutor'>
            <button type="button" className="white_btn">
              Become Tutor
            </button>
        </Link>
      </div>
    </>
  )
}

export default BecomeTutor