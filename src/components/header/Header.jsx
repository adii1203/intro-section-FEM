import React, { useState }from 'react'
import logo from '../../images/logo.svg'
import hambgIcon from '../../images/icon-menu.svg'
import close from '../../images/icon-close-menu.svg'
import calender from '../../images/icon-calendar.svg'
import todo from '../../images/icon-todo.svg'
import reminders from '../../images/icon-reminders.svg'
import planning from '../../images/icon-planning.svg'
import arrow from '../../images/icon-arrow-down.svg'
// eslint-disable-next-line no-unused-vars
import header from '../header/header.css'


function Header(props) {

    const {
            showNav,
            setShowNav,
            setShowFeatures, 
            showFeatures, 
            showCompany, 
            setShowCompany
        } = props

    const [scroll, setScroll] = useState(true)
   function handelClicks( showItem, setShowItem){
        setShowItem(!showItem)
   }
   function preventScroll(scroll, setScroll){
        if(scroll){
            document.body.style.overflow = 'hidden'
            setScroll(false)
        }
        else{
            document.body.style.overflow = 'visible'
            setScroll(true)
        }
   }

   return (
    <div className="header">
        <div className="wrapper">
            <div className="header-left">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav">
                    <div>
                        <p onClick={() => handelClicks( showFeatures, setShowFeatures)}>Features  <img style={showFeatures ? {transform: 'rotate(180deg)'} : {transform:'rotate(0deg)'}} src={arrow} alt="" />
                        </p>
                        <ul className="options" style={showFeatures  ? {display:'flex'} : {display:'none'}}>
                            <li>
                                <img src={todo} alt="" />
                                <a href="/">Todo List</a>
                            </li>
                            <li>
                                <img src={calender} alt="" />
                                <a href="/">Calendar</a>
                            </li>
                            <li>
                                <img src={reminders} alt="" />
                                <a href="/">Reminders</a>
                            </li>
                            <li>
                                <img src={planning} alt="" />
                                <a href="/">Planning</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p onClick={() => handelClicks(showCompany, setShowCompany)}>Company  <img style={showCompany ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} src={arrow} alt="" /></p>
                        <ul className="options company" style={showCompany  ? {display:'flex'} : {display:'none'}}>
                            <li><a href="//">History</a></li>
                            <li><a href="/">Our Team</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>
                    <a href="/">Careers</a>
                    <a href="/">About</a>
                </div>
            </div>
            <div className="header-right">
                <div className="buttons">
                    <button className='login-btn'>Login</button>
                    <button className='reg-btn'>Register</button>
                </div>
            </div>
            <div className="hamburgur" onClick={() => {handelClicks(showNav, setShowNav); preventScroll( scroll, setScroll)}}>
                <img src={hambgIcon} alt="" />
            </div>
            <div className="nav-mobile" 
                style={showNav? {display:'block'}
                 :{display:'none'}}>
                <div className="close"  >
                    <img src={close} alt="" onClick={() => {handelClicks(showNav, setShowNav); preventScroll( scroll, setScroll)}}/>
                </div>
                <div className="links">
                    <div>
                        <p className='opt-toggle' onClick={() => handelClicks(showFeatures, setShowFeatures)}>Features 
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </p>
                        <ul className="options" style={showFeatures  ? {display:'flex'} : {display:'none'}}>
                            <li>
                                <img src={todo} alt="" />
                                <a href="/">Todo List</a>
                            </li>
                            <li>
                                <img src={calender} alt="" />
                                <a href="/">Calendar</a>
                            </li>
                            <li>
                                <img src={reminders} alt="" />
                                <a href="/">Reminders</a>
                            </li>
                            <li>
                                <img src={planning} alt="" />
                                <a href="/">Planning</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='opt-toggle' onClick={() => handelClicks(showCompany, setShowCompany)}>Company
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </p>
                        <ul className="options" style={showCompany ? {display:'flex'} : {display:'none'}}>
                            <li><a href="/">History</a></li>
                            <li><a href="/">Our Team</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="/">Careers</a>
                    </div>
                    <div>
                        <a href="/">About</a>
                    </div>
                </div>
                <div className="buttons-mobile">
                    <button className='login-btn'>Login</button>
                    <button className='reg-btn'>Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header