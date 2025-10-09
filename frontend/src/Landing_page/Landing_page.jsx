import React, { useEffect } from 'react'
import style from './Landing_page.module.css'
import logo from '../assets/logo_white_full.png'
import { Link } from 'react-router-dom'
import { getToken } from './auth.js'
const Landing_page = () => {
    //login and register condition rendering for logout

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    useEffect(() => {
        const token = getToken();
        setIsLoggedIn(!!token);
    }, [])
    function handleLogout() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        
    }
    return (
        <>
            <div className={style.landingPage}>
                <div className={style.navbar}>
                    <img src={logo} alt="logo" className={style.logo} />
                    <div className={style.navlinks}>
                        <Link to='/' className={style.navhrefs}  >How it Works?</Link>
                        <Link to='/' className={style.navhrefs} >Arbitrators</Link>
                        {
                            isLoggedIn ? (
                                <button className={style.logoutBtn} onClick={handleLogout}>Logout</button>
                            ) : (
                                <>
                            <Link  to='/register' className={style.navhrefs} >Register</Link>
                            <Link to='/login' className={style.navhrefs}  >Login</Link>
                            </>
                        )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing_page
