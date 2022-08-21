import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
import WebFont from 'webfontloader';
import UAuth from '@uauth/js';



function Navbar() {
    const [click,setClick] = useState(false);
    const[button, setButton] = useState(true);
    const [userWallet, setUserWallet] = useState(null);

    const uauth = new UAuth(
        {
            clientID: "8f33f412-094b-46ca-8034-021278bd854a",
            redirectUri: "https://gdcoin.netlify.app",
            scope: "openid wallet"
          }
      )
    
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <=960 ) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Raleway']
          }
        });
       }, []);
      

      
    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton)


    //useEffect model
    useEffect(() => {
    // setUserWallet("Login With Unstoppable")
    uauth.user()
    .then((user) => {
      setUserWallet(user.sub)
      // user exists
      console.log("User information:", user);
    })
    .catch((err) => {
      console.log(err)
      // user does not exist
    })
  }, []);

  //login button
  const login = async () => {
    try {
        const authorization = await uauth.loginWithPopup();
        uauth.user()
        .then((user) => {
            setUserWallet(user.sub)
            // user exist
            console.log("User information:", user);
        })
        console.log(authorization)
    } catch (err) {
        console.error(err)
    }
  }

  const logout = async () => {
    try {
        await uauth.logout();
        setUserWallet(null);
    } catch (err) {
        console.error(err);
    }
  }


    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar" style={{fontFamily: 'Raleway'}} >
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        {/* <GiGoldBar className='navbar-icon'/> */}

                       Deerswap.
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/search' className="nav-links" onClick={closeMobileMenu}>
                                Domains
                            </Link>
                        </li>
            
                        {/* <li className="nav-btn">
                            {button ? (
                                <Link to='/SignUp' className='btn-link' >
                                    <Button buttonStyle='btn--outline'>WHITE PAPER</Button>
                                </Link>
                            ):(
                                <Link to='/SignUp' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' >WHITE PAPER</Button>
                                </Link>
                            )} */}
                            <li className='nav-btn'>
                            {userWallet ? 
                            <>
                             <li onClick={() => logout()}>
                             <a href="#" className="button">{userWallet}</a>
                            </li>
                              </>
                               : 
                              <li onClick={() => login()}>
                             <a href="#" className="button">Signup With Unstoppable</a>
                            </li>}

                        </li>
                    </ul>
                </div>
            </div>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
