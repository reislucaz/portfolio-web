import { SiReact, SiMysql, SiPostgresql, SiNestjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiSocketdotio } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import './index.css';

function Card({...props}) {
    return (
        <div className="card-container">
            <div className="card-header">
                <div className="card-image-container">
                    <img src={props.image} className="card-image"/>
                </div>
                <p className="card-title">{props.title}</p>
            </div>
            <div className="card-body">
                <p id="card-description">{props.description}</p>
            </div>
            <div className="card-footer">
                { props.link ? (
                    <a className="card-link" href={props.link} target="_blank">Conheça mais</a>
                    ): (
                        <p className="card-link" id="disabled">Sem link</p>
                    )}
                <div className="card-tech">
                { props.tech.map( (t: any) => {
                    switch(t) {
                        case 'react':
                            return <SiReact className="tech-icon"/>
                        case 'node':
                            return <FaNodeJs className="tech-icon"/>
                        case 'mysql':
                            return <SiMysql className="tech-icon"/>
                        case 'postgresql':
                            return <SiPostgresql className="tech-icon"/>
                        case 'ejs':
                            return <p className="tech-icon">EJS</p>
                        case 'nestjs':
                            return <SiNestjs className="tech-icon"/>
                        case 'typescript':
                            return <SiTypescript className="tech-icon"/>
                        case 'javascript':
                            return <SiJavascript className="tech-icon"/>
                        case 'html':
                            return <SiHtml5 className="tech-icon"/>
                        case 'css':
                            return <SiCss3 className="tech-icon"/>
                        case 'socketio':
                            return <SiSocketdotio className="tech-icon"/>
                        default:
                            return null
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card
