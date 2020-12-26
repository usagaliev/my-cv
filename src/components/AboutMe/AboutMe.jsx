import React, {useState} from 'react';
import s from './AboutMe.module.css';
import img from '../../images/me.png'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTelegram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {faAddressCard, faAtom, faRedditAlien} from "@fortawesome/free-solid-svg-icons";
import {I18nProvider, LOCALES} from "../../i18n";
import { FormattedMessage } from "react-intl";
import translate from "../../i18n/translate";


AOS.init()

const AboutMe = (props) => {
    const [locale, setlocale] = useState(LOCALES.ENGLISH);
    return (
        <I18nProvider locale={locale}>
            <div className={s.wrapper}>
                <div className={s.box}>
                    <div className={s.boxRow}>
                        <div>
                            <img src={img} className={s.img}/>
                        </div>
                        <div className={s.row}>
                            <h1 className={s.head}>{translate('name')}</h1>
                            <h4>Front-End Developer</h4>
                            <div className={s.fas}>
                                <a href={'https://www.facebook.com/sagaurma'}>
                                    <FontAwesomeIcon icon={faFacebook} size={"3x"} className={s.fasIcon}/>
                                </a>
                                <a href={'https://t.me/howlbowl'}>

                                    <FontAwesomeIcon icon={faTelegram} size={"3x"} className={s.fasIcon}/>
                                </a>
                                <a href={'https://www.linkedin.com/in/urmat-sagaliev-012222167'}>
                                    <FontAwesomeIcon icon={faLinkedin} size={"3x"} className={s.fasIcon}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.info}>

                    <div>
                        <div className={s.infoHead}>
                            <FontAwesomeIcon icon={faAddressCard} size={'3x'} className={s.infoFas}/>
                            <h3 className={s.infoH2}>Info</h3>
                        </div>
                        <hr className={s.infoHr} align='left'/>
                        <div className={s.btnBox}>
                            <NavLink to='/profile'>
                                <button className={s.btn}>{translate('knowmore')}</button>
                            </NavLink>
                        </div>
                        <div className={s.infoRow}>
                            <div className={s.infoAttr}>
                                <p>{translate('fullname')}</p>
                                <p>{translate('birthdate')}</p>
                                <p>{translate('location')}</p>
                                <p>{translate('phone')}</p>
                                <p>E-mail:</p>


                            </div>

                            <div className={s.infoAttr2}>
                                <p>{translate('me')}</p>
                                <p>{translate('mybirthdate')}</p>
                                <p>{translate('mycity')}</p>
                                <p>+996 551 096 196</p>
                                <p>akisagaliev@gmail.com</p>
                            </div>


                        </div>
                    </div>
                    <div>
                        <div className={s.infoHead}>
                            <FontAwesomeIcon icon={faAtom} size={'3x'} className={s.infoFas2}/>
                            <h3 className={s.infoH2}>{translate('whatcani')}</h3>
                        </div>
                        <hr className={s.infoHr} align='left'/>
                        <p>{translate('whatcani1')}</p>
                        <p>{translate('whatcani2')}</p>
                        <p>{translate('whatcani3')}</p>
                        <p>{translate('whatcani4')}</p>
                        <div className={s.btnLang}>
                            <div className={s.btnSwitch} onClick={() => setlocale(LOCALES.RUSSIAN)}>НА РУССКОМ</div>
                            <div className={s.btnSwitch} onClick={() => setlocale(LOCALES.ENGLISH)}>IN ENGLISH</div>
                        </div>
                        <p>{translate('whatcani5')}</p>
                        <p>{translate('whatcani6')}</p>
                    </div>
                </div>
            </div>
        </I18nProvider>
    )
}
export default AboutMe;