import './SearchDomain.css';
import React, { useState } from 'react';
import axios from 'axios';

const SearchDomain = ({setAnimate, animate}) => {
    
    const API_URL = 'https://unstoppabledomains.g.alchemy.com/domains/';
    const API_KEY = 'ZDwwQcFfAdAa-QTOY3zKqEsL5DutDMTk';
  
    const [ info, setInfo ] = useState(null);
    const [ userDomain, setUserDomain ] = useState();
  
    const checkOut = (e) => {
      e.preventDefault();
  
      // let userDomain = document.getElementById('domain').value;
      if (!userDomain) return;
  
      axios.get(API_URL + userDomain, {
        headers: {
          'Authorization': `bearer ${API_KEY}`
        }
      })
      .then(res => {
        setInfo(res.data);
        // console.log(res.data);
        // console.log(info);
      })
      .catch(err => {
        setInfo(err);
      });
      setPopUp(!popUp)
    }
  
    const [popUp, setPopUp] = useState(true);
  
    // console.log(info);
  
  
    return (
      <div>
          <div className="showcase-area">
          {/* popup area */}
          <div className={ `${popUp ? 'popup' : 'popup active'}`} id="popup-1">
          <div className="overlay"></div>
          <div className="content">
            <div className="close-btn" onClick={() => {setPopUp(!popUp);}}>
              &times;
            </div>
            {info ? 
            <div>
              <p>DomainName : {info.meta.domain} </p><hr/>
              <p>Owner : {info.meta.owner} </p><hr/>
              <p>Blockchain : {info.meta.blockchain} </p><hr/>
              <p>Sale_Record : {info.records["whois.for_sale.value"] ? 
              "On Sale" : "Not on Sale"}
              </p><hr/>
              <p>Mail : {info.records["whois.email.value"]}</p><hr/>
              <p><strong> blockchain addresses in the domain profile</strong></p><hr/>
              <div>
                {info.records["crypto.ETH.address"] ? 
                <p>ETH address : {info.records["crypto.ETH.address"]}</p> :
                <p>No ETH address</p>}
              </div><hr/>
              <div>
                {info.records["crypto.MATIC.version.MATIC.address"] ? 
                <p>Matic address : {info.records["crypto.MATIC.version.MATIC.address"]}</p> :
                <p>No matic address</p>}
  
                  <button className="btn" >Send_Crypto</button>
  
              </div>
            </div> : 
            <p> Resolving Domain....</p>}
           
            
          </div>
        </div>
  
                <div className="cta">
                  <p></p>
                  <form className='formstyle' onSubmit={checkOut}>
                    <input placeholder='enter domain address' className='inputform' onChange={(e) => {setUserDomain(e.target.value)}} required/>
                    <button className="btn" type='submit' >Search Domain</button>
                  </form>
                  {/* <a href="#" className="btn">Get started</a> */}
                </div>
              </div>
              </div>
    ) 
}
export default SearchDomain;
