import './style.css';
import img1 from '../../img/podcast_2.webp';
import img2 from '../../img/podcast_3.jpg';
import img3 from '../../img/podcast_6.jpg';
import img4 from '../../img/podcast_5.jpg';

interface CarouselDetail {
    title: string;
}

//TODO #3 implement functionality - click/hold to slide carousel item @natanfrost

export default function Carousel(props:CarouselDetail) {
    return(
        <div className="Carousel">
            <h2>{props.title}</h2>
            <div className="row">
                <img className="carousel" src={img1} alt=""/>
                <img className="carousel" src={img2} alt=""/>
                <img className="carousel" src={img4} alt=""/>
                <img className="carousel" src={img3} alt=""/>
            </div>
        </div>
    )
}