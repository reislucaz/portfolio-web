import './index.css'
import { FaNodeJs, FaReact, FaDocker, FaDatabase } from 'react-icons/fa'
import { SiTypescript, SiNestjs } from 'react-icons/si'

function Icons () {
    return (
        <div className='icons'>
            <div className='icon' id='first-icon'><FaNodeJs /></div>
            <div className="icon" id="second-icon"><SiTypescript /></div>
            <div className="icon" id="third-icon"><FaReact /></div>
            <div className="icon" id="fourth-icon"><FaDocker /></div>
            <div className="icon" id="fifth-icon"><SiNestjs /></div>
            <div className="icon" id="sixth-icon"><FaDatabase /></div>
        </div>
    )
}

export default Icons
