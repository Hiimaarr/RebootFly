import './Footer.css'
import logo from '../../assets/media/logoT.png'
import linkedin from '../../assets/media/linkedin.png'
import instagram from '../../assets/media/instagram.png'
import twitter from '../../assets/media/twitter.png'

function Footer() {
  return (
    <>
      <div id="footer">
            <img id="logoFooter" src={logo}></img>
            <div id="info">
              <h2 className='infoFooter'>Contact</h2>
              <h2 className='infoFooter'>FAQ</h2>
              <h2 className='infoFooter'>Work with us</h2>
            </div>
            <div id="redes">
                <img className='red'src={twitter}/><img className="red"src={linkedin}/><img className="red"src={instagram}/>
            </div>
        </div>
    </>
  )
}

export default Footer
