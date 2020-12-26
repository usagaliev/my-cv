import React from 'react';
import s from './Profile.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import JS from "./JS/JS";


AOS.init()


const Profile = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesOnLeft: 1
    };
    return <div className={s.body}>

        <div className={s.box}>
            <div className={s.boxInBox}>
            <h1>Java Script, React JS</h1>
            </div>
        </div>
        <div className={s.exBoxes}>
            <JS id='js' />
        </div>

    </div>
}

export default Profile;