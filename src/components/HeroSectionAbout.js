import React from 'react'
import { Button } from './Button'
// import { Link } from 'react-router-dom'
import './HeroSection.css'

import { homeObjSeven } from './pages/HomePage/Data';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel,
    img, alt, imgStart
}) {
    return (
        <>
        <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
            <div style={{textAlign:'center'}}>
                 
                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                    <h1 style={{textAlign: 'center',color:'#ffd051'}}>Welcome to Golden Deer Whitelist</h1>
                    <div className='light'>
                    <h3 style={{textAlign: 'center',color:'#111'}}>
                        We are a gold mining company. We are raising funds to expand our operations ,
                        to buy equipment and hire more miners. We are part of, and passionate about the gold industry. 
                        We believe in the stability of gold as an asset and strongly champion it as a future currency.</h3>
                        <h3 style={{textAlign: 'center',color:'#111'}}>
                         SIGN UP TO GET ACCESS TO OUR WHITELIST </h3>
                    </div>

                 {/* </div> */}

                   {/* <div className="row home__hero-row"  */}
                {/* // style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}> */}
                    {/* <div className='col'>
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <h3>Email :  goldendeercapital@gmail.com </h3>‎   ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  */}
                        {/* </div> */}
                    {/* </div> */}

                    {/* <div className='col'>
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" /> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
        </>
    )
}

export default HeroSection
