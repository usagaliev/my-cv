import React from 'react';
import s from './Journalism.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../../images/img/1.jpg';
import img2 from '../../../images/img/2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()


const Journalism = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesOnLeft: 1
    };

    return <div>
        <div className={s.box1}>
            <div className={s.boxInBox}>
                <h1>Журналистика</h1>
            </div>
        </div>
        <div className={s.text} >
            <br/>
            <p>До середины ноября 2020 года, в течение 6 лет, проработал корреспондентом в крупнейшем информагентстве
                Кыргызстана — АКИpress. </p>
            <p>О том, чем я занимался в журналистике в двух фотографиях:</p>
        </div>

        <Slider {...settings}>
            <div>
                <img src={img} className={s.img}/>
            </div>
            <div>
                <img src={img2} className={s.img}/>
            </div>
        </Slider>
        <div className={s.text2} data-aos='fade-in'>
            <br/>
            <br/>
            <p className={s.ahref}>Руководил проектами <a href='https://eco.akipress.org/'>"Экология АКИpress" </a>
                и <a href='http://akipress.org/dolbor/traffic/'>"Бишкек без пробок"</a>.</p>
        </div>
        <div className={s.text2} data-aos='fade-in'>
            <p>В августе 2018 года вместе со съемочной группой АКИpress,
                состоящей из 6 человек, сняли документальный фильм о самом масштабной проекте в Кыргызстане —
                Дорога «Север-Юг». Русская и кыргызская версии фильма на YouTube набрали более миллиона просмотров.</p>
            <iframe width="900px" height="500" className={s.video}
                    src="https://www.youtube.com/embed/4ke3CYICFcY" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

            <p>Летом 2019 года сняли вторую часть документального фильма.</p>
            <iframe width="900px" height="500" className={s.video}
                    src="https://www.youtube.com/embed/CPFAcOs40sE" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

        </div>
    </div>
}
export default Journalism;