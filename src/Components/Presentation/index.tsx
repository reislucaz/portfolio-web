import './index.css'
import LucasImg from './lucas-reis.webp'
import ThreeScene from '../ThreeScene'

function Presentation () {
    return (
        <div className="mainPresentation">
            <div className="presentation-left">
                <h2 id="sobre-mim-text">_Sobre mim</h2>
                <div className="photo-text">
                    <img src={LucasImg} alt="" id="lucas-photo" />
                    <p id="lucas-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam rem beatae ullam ut neque sit incidunt quo magnam, repellendus cupiditate
                    libero blanditiis,reprehenderit rerum tempore nesciunt est natus consectetur eos.</p>
                </div>
            </div>
            <div className="presentation-right">
                <ThreeScene />
            </div>
        </div>
    )
}

export default Presentation
