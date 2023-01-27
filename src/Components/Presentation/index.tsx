import './index.css'
import LucasImg from './lucas-reis.webp'

function Presentation () {
    return (
        <div className="main-presentation">
            <div className="presentation-container">
                <h2 id="sobre-mim-text">_Sobre mim</h2>
                <div className="photo-text">
                    <img src={LucasImg} alt="" id="lucas-photo" />
                    <div className="lucas-text">
                        <p>Lucas Reis, Estudante do 3º Período de Engenharia de Software na instituição UNIEvangélica.
                        Atualmente trabalho como Desenvolvedor Back-end na Fábrica de Tecnologias Turing.
                        Possuo conhecimento de inglês em nível intermediário, conhecimento sobre processos de software,
                        em especial metodologias ágeis.
                        </p>
                        <p id="final-text">
                        Tenho paixão por aprender e acredito que a vida seja uma construção de aprendizados contínuos._
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
