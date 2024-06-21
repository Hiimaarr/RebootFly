import './Header.css'
import logo from '../../assets/media/logoT.png'

function Header() {
  return (
    <>
        <div id="header">
            <img id="logo" src={logo}></img>
            <div id="content">
              <h2 className="info">Sustainability</h2>
              <h2 className="info">About us</h2>
              <h2 className="info">Contact</h2>
              <h2 id="register"className="info">Registrate o logueate aqui</h2> 
            </div>
        </div>
    </>
  )
}

export default Header
