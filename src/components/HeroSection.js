import React, { useState, useEffect } from "react";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";
import  './Button.css';
// import { Link } from 'react-router-dom'
import './HeroSection.css'


function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel,
    img, alt, imgStart
}) {

    const [hyphenWidget, setHyphenWidget] = useState();

    useEffect(() => {
    const widget = HyphenWidget.default.init(
      document.getElementById("widget"),
      {
        dAppName: "deerswap",
        showWidget: true,
         showCloseButton: false,
        tag: "winner azubuike",
        env: "test",
        }
        );

        if (widget) {
          setHyphenWidget(widget);
        }
          }, []);

        function handleOpen() {
          hyphenWidget.open();
        }

        function handleClose() {
          hyphenWidget.close();
        }
        const [popUp, setPopUp] = useState(true);

    return (
        <>
        <div className={ lightBg ? 'home__hero-section' : 'home__hero-section darkBg' }>
            <div className="container">
                <div className="row home__hero-row" 
                style={{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className='col'>
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            {/* <Link to='/Pdf'>           */}
                            {/* </Link> */}   
                            <button className='hyphen-btn' onClick={() => {setPopUp(!popUp);handleOpen()}}>
                                Get started
                                </button>                   
                        </div>
                    </div>
                    <div className='col'>
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
                </div>
                <div className={ `${popUp ? 'popup' : 'popup active'}`}>
            <div className="overlay"></div>
            <div className="content">
              <div className="close-btn" onClick={() => {setPopUp(!popUp);handleClose()}}>
            &times;
          </div>
          <div id="widget"></div>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}

export default HeroSection
