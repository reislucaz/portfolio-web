import * as Scroll from 'react-scroll';
import Header from "../../Components/Header";
import Terminal from "../../Components/Terminal";
import Icons from "../../Components/Icons";
import { RiArrowDownSLine } from "react-icons/ri"
import "./index.css"
import Presentation from "../../Components/Presentation";


function IndexPage () {
    let scroll = Scroll.animateScroll;
    let scrollToPres = () => {
        scroll.scrollTo(1000)
    }

    return (
        <div>
            <div className="main"></div>
            <Header />
            <Terminal />
            <Icons />
            <RiArrowDownSLine className="arrow" onClick={scrollToPres}/>
            <Presentation />
        </div>
    )
}

export default IndexPage
