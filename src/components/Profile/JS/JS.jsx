import React from 'react';
import s from './JS.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../images/img/js1.png';
import img2 from '../../../images/img/js2.png';
import img3 from '../../../images/img/js3.png';
import img4 from '../../../images/scr1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDatabase,
    faImages,
    faStore,
    faWindowRestore,
    faShoppingCart,
    faCode
} from "@fortawesome/free-solid-svg-icons";

AOS.init()


const JS = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 1,
        slidesOnLeft: 1,
        centerMode: true,
        centerPadding: '0px',
    };

    return <div className={s.js}>

        <h1>JavaScript, React JS и верстка</h1>
        <hr className={s.hr}/>
        <div>

            <p>Мини-интернет-магазин, который я создал при изучении React JS:</p>
            <div className={s.pSmall}>
                <div className={s.icons}>
                    <FontAwesomeIcon icon={faCode} size={'2x'}/>
                    <FontAwesomeIcon icon={faDatabase} size={'2x'}/>
                    <FontAwesomeIcon icon={faStore} size={'2x'}/>
                    <FontAwesomeIcon icon={faShoppingCart} size={'2x'}/>
                </div>
                <div>
                    <p>Создал компоненты и несколько страниц, в том числе страницу для корзины товаров</p>
                    <p> Создал временную базу данных с наименованиями и ценами товаров</p>
                    <p> При добавлении товара в базу данных, автоматически создается блок с изображением, названием и
                        ценой товара</p>
                    <p>При нажатии на кнопку "Заказать", отправляются данные в "Корзину". Использовал Local Storage</p>
                </div>
            </div>
            <div className={s.imgScrBlock}>
                <img src={img4} className={s.imgScr}/>
            </div>
        </div>

        <div className={s.text} data-aos='fade-in'>

            <p>Проект, который я сверстал, используя HTML5/CSS3, JavaScript и библиотеку jQuery:</p>

            <div className={s.pSmall}>
                <div className={s.icons}>
                    <FontAwesomeIcon icon={faDatabase} size={'2x'}/>
                    <FontAwesomeIcon icon={faImages} size={'2x'}/>
                    <FontAwesomeIcon icon={faWindowRestore} size={'2x'}/>
                </div>
                <div className={s.icons2}>
                    <p>Разработал кредитный калькулятор, который через local
                        storage сохраняет данные,
                        чтобы отправить через форму заявки на сервер</p>
                    <p> Слайдеры с видео и изображениями, кнопки управления при
                        помощи jQuery</p>
                    <p>Модальное окно "Заказать звонок" с обратным отсчетом
                        при помощи события CountDown</p>
                </div>
            </div>

            <Slider {...settings}>
                <div>
                    <img src={img1} className={s.img}/>
                </div>
                <div>
                    <img src={img2} className={s.img}/>
                </div>
                <div>
                    <img src={img3} className={s.img}/>
                </div>
            </Slider>
        </div>
    </div>
}
export default JS;