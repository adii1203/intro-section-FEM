import imageMobile from '../../images/image-hero-mobile.png'
import imageDesktop from '../../images/image-hero-desktop.png'
import dataBiz from '../../images/client-databiz.svg'
import audioPhile from '../../images/client-audiophile.svg'
import meet from '../../images/client-meet.svg'
import maker from '../../images/client-maker.svg'
import main from '../main/hero.css'


function Hero() {
  return (
    <div className="main">
        <div className="hero">
            <div className="content">
                <h1>Make remote work</h1>
                <p>Get your team in sync. no matter your location. Streamline process create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>
                <div>
                    <img src={dataBiz} alt="" />
                    <img src={audioPhile} alt="" />
                    <img src={meet} alt="" />
                    <img src={maker} alt="" />
                </div>
            </div>
            <div className="img">
                <img className='img-mobile' src={imageMobile} alt=""/>
                <img className='img-desktop' src={imageDesktop} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Hero