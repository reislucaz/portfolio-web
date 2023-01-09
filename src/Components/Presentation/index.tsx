import './index.css'
import LucasImg from './lucas-reis.webp'

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
                <canvas id="three"></canvas>
            </div>
        </div>
    )
}

export default Presentation
