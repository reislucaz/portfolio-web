import Card from "./Card";
import projects from "./projetos.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import './index.css';
import { useMediaQuery } from "react-responsive";

function Projects () {
    const isSmallScreen = useMediaQuery({ maxWidth: 1000 });
    const isMoreSmallScreen = useMediaQuery({ maxWidth: 670 });
    const slidesPerView = isMoreSmallScreen ? 1 : isSmallScreen ? 2 : 3;

    return (
        <div className="projects-container">
            <h2 className="projects-text">Projetos</h2>
            <Swiper modules={[Navigation, A11y]}
            navigation
            slidesPerView={slidesPerView}
            spaceBetween={30}
            id="swiper">
                {projects.map( (p: any, index: number) => {
                    return  <SwiperSlide className="card-slide" key={index}>
                                <Card {...p}/>
                            </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default Projects
