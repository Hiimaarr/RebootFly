import './Header.css'
import logo from '../../assets/media/logoT.png'
import {Link,useNavigate} from "react-router-dom"
import { useState } from 'react'
import { Box,Grid,Avatar } from '@mui/material'

function Header() {
  const [logged,setLogged]= useState(!localStorage.getItem("token") ? false : true)
  const navigate = useNavigate()
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
              {!logged && <h2 className="info" onClick={()=>{navigate("/signup")}}>Get in!</h2> }
              {!logged ? <h2 className="info" onClick={()=>{navigate("/login")}}>Not logged</h2> : 
              <div id="icon">
              <Box sx={{ flexGrow: 1 }}> 
                <Grid xs display="flex" justifyContent="center" alignItems="center">
                  <Avatar src={logo} onClick={()=>{navigate("/Profile")}} />
               </Grid>
              </Box>
              </div>
              }


            </div>
        </div>
    </>
  )
}

export default Header
