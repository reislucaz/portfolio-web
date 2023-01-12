import * as Scroll from 'react-scroll';
import Header from "../../Components/Header";
import Terminal from "../../Components/Terminal";
import Icons from "../../Components/Icons";
import { RiArrowDownSLine } from "react-icons/ri"
import "./index.css"
import Presentation from "../../Components/Presentation";
import Contact from '../../Components/Contact';
import Wave from '../../Components/Wave';
import MediaQuery from 'react-responsive';

export function scrollToPres (y: number) {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(y)
}

function IndexPage () {

    return (
        <div>
            <div className="main"></div>
            <Header />
            <Terminal />
            <Icons />
            <RiArrowDownSLine className="arrow" onClick={() => scrollToPres(1000)}/>
            <Presentation />
            <MediaQuery maxWidth={713}>
                <Wave />
            </MediaQuery>
            <Contact />
        </div>
    )
}

export default IndexPage
