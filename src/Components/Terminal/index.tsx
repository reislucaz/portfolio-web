import { BsTerminal } from 'react-icons/bs'
import { RxCross2, RxCross1 } from 'react-icons/rx'
import { FaRegWindowMinimize, FaRegSquare, } from 'react-icons/fa'
import Typist from 'react-typist'
import './index.css'
import "@fontsource/fira-code";

function Terminal() {
    return (
        <div className="terminal">
            <div className="terminalHeader">
                <div className="HeaderWindow">
                    <BsTerminal id='terminalIcon'/>
                    <p id="WindowName">C:\Users\LucasReis</p>
                    <RxCross2 id='windowCross'/>
                </div>
                <div className="HeaderOptions">
                    <FaRegWindowMinimize className='HeaderOption'/>
                    <FaRegSquare className='HeaderOption'/>
                    <RxCross1 className='HeaderOption' id='cross'/>
                </div>
            </div>

            <div className="terminalBody">
                <p className='textoTerminal' id='cdPortfolio'>{'>'} cd \Meu Portfolio\</p>
                <p className='textoTerminal' id='echo'>
                    <Typist>{'>'} echo "Seja bem vindo ao meu Portfólio!"
                    <Typist.Delay ms={1}/><br/>{'>'} echo "É uma honra tê-lo aqui! =D  </Typist>
                </p>
            </div>
        </div>
    )
}

export default Terminal
