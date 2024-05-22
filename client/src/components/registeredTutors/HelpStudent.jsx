import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import ChatApp from '../registeredUsers/ChatApp'


const HelpStudent = () => {
  return (
    <>
        <h1 className="page-title">Help Student</h1>
        <br />
        <div className="component">
          <table className="table">
            <tbody className="tutor-list">
                <tr>
                  <td className='text-center'><Link to="/ChatApp">Student Info</Link></td>
                </tr>
            </tbody>
          </table>
        </div>
    </>
  )
}

export default HelpStudent