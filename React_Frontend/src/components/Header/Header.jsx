import './Header.css'
import logo from '../../assets/media/logoT.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [logged,setLogged]= useState(!localStorage.getItem("token") ? false : true)
  return (
    <>
        <div id="header">
          <Link to="/">
            <img id="logo" src={logo}></img>
          </Link>
            <div id="content">
              <h2 className="info">Sustainability</h2>
              <h2 className="info">About us</h2>
              <h2 className="info">Contact</h2>
              {!logged && <Link to="/login">
              <h2 id="register"className="info">Get in!</h2>
              </Link>}
              {!logged ? 
                <Link to="/login">
                  <h2 id="register"className="info">Not logged</h2>
                </Link> : 
                <Link to="/login">
                  <h2 id="register"className="info">Logged</h2>
                </Link>}

            </div>
        </div>
    </>
  )
}

export default Header
