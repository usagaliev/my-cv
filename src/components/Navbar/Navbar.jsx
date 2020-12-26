import React, {Component} from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";
import { faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";

let Scroll = require('react-scroll');
let scroll = Scroll.animateScroll;

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            pos: 'fixed',
            top: '200px',
            top1: '250px',
            top2: '300px',
            top3: '350px',
            right: '0',
            width: '50px',
            height: '50px',
            dis: '10',
            disNone: 'none',
            opacity30: '35%',
            opacity100: '100%',
            transitionF: 'linear',
            transitionD: '1s',
            pad0: '0'
        });
    }


    render() {
        const styles = {};
        if (this.state.pos) {
            styles.position = this.state.pos;
            styles.flexDirection = this.state.dir;
            styles.bottom = this.state.top;
            styles.right = this.state.right;
            styles.width = this.state.width;
            styles.height = this.state.height;
            styles.zIndex = this.state.dis;
            styles.opacity = this.state.opacity30;
            styles.transitionTimingFunction = this.state.transitionF;
            styles.transitionDuration = this.state.transitionD;
            styles.padding = this.state.pad0;
        }
        ;
        const styles1 = {};
        if (this.state.pos) {
            styles1.position = this.state.pos;
            styles1.flexDirection = this.state.dir;
            styles1.bottom = this.state.top1;
            styles1.right = this.state.right;
            styles1.width = this.state.width;
            styles1.height = this.state.height;
            styles1.zIndex = this.state.dis;
            styles1.opacity = this.state.opacity30;
            styles1.transitionTimingFunction = this.state.transitionF;
            styles1.transitionDuration = this.state.transitionD;
            styles1.padding = this.state.pad0;
        }
        ;
        const styles2 = {};
        if (this.state.pos) {
            styles2.position = this.state.pos;
            styles2.flexDirection = this.state.dir;
            styles2.bottom = this.state.top2;
            styles2.right = this.state.right;
            styles2.width = this.state.width;
            styles2.height = this.state.height;
            styles2.zIndex = this.state.dis;
            styles2.opacity = this.state.opacity30;
            styles2.transitionTimingFunction = this.state.transitionF;
            styles2.transitionDuration = this.state.transitionD;
            styles2.padding = this.state.pad0;
        }
        ;
        const styles3 = {};
        if (this.state.pos) {
            styles3.position = this.state.pos;
            styles3.flexDirection = this.state.dir;
            styles3.bottom = this.state.top3;
            styles3.right = this.state.right;
            styles3.width = this.state.width;
            styles3.height = this.state.height;
            styles3.zIndex = this.state.dis;
            styles3.opacity = this.state.opacity30;
            styles3.transitionTimingFunction = this.state.transitionF;
            styles3.transitionDuration = this.state.transitionD;
            styles3.padding = this.state.pad0;
        }
        const hidden = {};
        if (this.state.pos) {
            hidden.display = this.state.disNone;
        }


        return (
            <div className='nav'>

                <div className='navContent1'>
                    <NavLink to='/aboutme' className='item item1' onClick={this.handleClick} style={styles} onClick={() => scroll.scrollToTop()} >

                        <span className='hidden' onClick={this.handleClick} style={hidden}>Обо мне</span>
                        <span className='hiddenMobile' onClick={this.handleClick} style={hidden}>Обо мне</span>

                    </NavLink>
                    <NavLink to='/profile' className='item item2'
                             onClick={this.handleClick, () => {scroll.scrollToTop()}} style={styles1}>

                        <span className='hidden' onClick={this.handleClick} style={hidden}>Web-developing</span>
                        <span className='hiddenMobile' onClick={this.handleClick} style={hidden}>Web-developing</span>

                    </NavLink>
                    <NavLink to='/dialogs' className='item item3'
                             onClick={this.handleClick, () => {scroll.scrollToTop()}} style={styles2}>
                        <span className='hidden2' onClick={this.handleClick} style={hidden}>Журналистика</span>
                        <span className='hiddenMobile' onClick={this.handleClick} style={hidden}>Журналистика</span>
                    </NavLink>
                    <NavLink to='/wordpress' className='item item4'
                             onClick={this.handleClick,  () => {scroll.scrollToTop()}} style={styles3}>
                        <span className='hidden2' onClick={this.handleClick} style={hidden}> WordPress</span>
                        <span className='hiddenMobile' onClick={this.handleClick} style={hidden}>WordPress</span>
                    </NavLink>

                </div>
<FontAwesomeIcon icon={faChevronCircleUp} size={'4x'} className='fixed' onClick={() => scroll.scrollToTop()} />
            </div>
        )
    }
}