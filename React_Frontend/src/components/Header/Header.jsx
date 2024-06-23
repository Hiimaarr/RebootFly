import './Header.css'
import logo from '../../assets/media/logoT.png'
import { Link } from 'react-router-dom'
function Header() {
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
              <Link to="/login">
              <h2 id="register"className="info">Signup or SignIn</h2> 
              </Link>
            </div>
        </div>
    </>
  )
}

export default Header
