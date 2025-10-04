import React from 'react'
import style from './Landing_page.module.css'
import logo from '../assets/logo_white_full.png'
import {  Link } from 'react-router-dom'
const Landing_page = () => {
    return (
        <>
            <div className={style.landingPage}>
                <div className={style.navbar}>
                    <img src={logo} alt="logo" className={style.logo} />
                    <div className={style.navlinks}>
                        <Link to='/' className={style.navhrefs}  >How it Works?</Link>
                        <Link to='/' className={style.navhrefs} >Arbitrators</Link>
                        <Link  to='/register' className={style.navhrefs} >Register</Link>
                        <Link to='/login' className={style.navhrefs}  >Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing_page
