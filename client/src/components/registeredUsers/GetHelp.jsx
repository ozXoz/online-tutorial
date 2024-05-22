import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import ChatApp from '../registeredUsers/ChatApp'


const GetHelp = () => {
  return (
    <>
        <h1 className="page-title">Get Help</h1>
        <br />
        <div className="component">
          <table className="table">
            <tbody className="tutor-list">
                <tr>
                  <td className='text-center'><Link to="/ChatApp">Tutor Info</Link></td>
                </tr>
            </tbody>
          </table>
        </div>
    </>
  )
}

export default GetHelp