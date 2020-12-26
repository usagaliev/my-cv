import React, {Component} from 'react';

import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import AboutMe from "./components/AboutMe/AboutMe";
import {Parallax} from 'react-parallax';
import img from './images/img/1 (1).jpg'
import Journalism from "./components/Profile/Journalism/Journalism";
import Wordpress from "./components/Profile/Wordpress/Wordpress";


const App = () => {
    return (
        <HashRouter>
            <Parallax blur={30} bgImage={img} bgImageAlt="move" strength={3}>
                <div className='app-wrapper'>
                    <div className='app-wrapper-content'>
                        <div className='content'>
                            <Navbar/>
                            <div className='components'>
                                <Route path='/dialogs' component={Journalism}/>
                                <Route path='/profile' component={Profile}/>
                                <Route path='/aboutMe' component={AboutMe}/>
                                <Route path='/wordpress' component={Wordpress}/>
                            </div>
                        </div>

                    </div>
                </div>

            </Parallax>
        </HashRouter>
    );
}
export default App;