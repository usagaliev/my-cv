import React from 'react';
import s from './Wordpress.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../../images/scrn1.png';
import img2 from '../../../images/scrn2.png';
import img3 from '../../../images/scrn3.png';
import img4 from '../../../images/scrn4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()


const Wordpress = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 1,
        slidesOnLeft: 1
    };

    return <div>
        <div className={s.box1}>
            <div className={s.boxInBox}>
                <h1>Wordpress</h1>
            </div>
        </div>
        <div className={s.text}>
            <br/>
            <br/>
            <p>В настоящее время работаю удаленно, беру заказы и разрабатываю сайты на WordPress и Tilda.</p>
            <p>Для разработки на Wordpress пользуюсь конструктором Elementor Pro.</p>
            <p>Работу с Wordpress и Tilda начал с декабря 2020 года. За это время выполнил два коммерческих проекта.</p>
            <br/>
            <br/>
            <p className={s.textBigger}><a href='http://lednik.kg/'>Первый проект</a> — Сайт на Wordpress для компании
                "Ледник".</p>
            <br/>
            <br/>
            <Slider {...settings}>
                <div>
                    <img src={img} className={s.img}/>
                </div>
                <div>
                    <img src={img2} className={s.img}/>
                </div>
            </Slider>
            <br/>
            <br/>
            <p className={s.textBigger}><a href='http://project3276193.tilda.ws/'>Второй заказ</a> —
                Landing Page на конструкторе Tilda для организации "ООН-Женщины" в Кыргызстане.</p>
            <br/>
            <br/>

        </div>
        <Slider {...settings}>
            <div>
                <img src={img3} className={s.img}/>
            </div>
            <div>
                <img src={img4} className={s.img}/>
            </div>
        </Slider>
        <br/>
        <br/>
        <br/>

    </div>
}
export default Wordpress;