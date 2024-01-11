import React, {Fragment, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import './Payments.css'
import goods from '../goods';
const Payments = () => { 
    const { id } = useParams();
const numericId = parseInt(id, 10); // Convert id to a number
const foundItem = goods.find(item => item.id === numericId);
const goodLink = foundItem.pricelink;
const [isImageLoaded, setIsImageLoaded] = useState(false);

const handleImageLoad = () => {
  setIsImageLoaded(true);
};

  return (
<Fragment>
<img
        src="/img/BG.png"
        alt="Background"
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      {isImageLoaded && (
    <div className='payments'>
         <div className='support'>
          <img src="/img/Support 1.png" alt="logo" />
      
          <img src="/img/Support 2.png" alt="logo" />
      </div>
        <div className='payments-good'>
        <img src={foundItem.url}/>
        </div>
        <div className='payment-links'>
      <Link className='payment-link' to="/payment"><img src="/img/binance.png"></img></Link>
      <Link className='payment-link' to="https://qiwi.com/p/77472636097"><img src="/img/qiwi.png"></img></Link>
      <Link className='payment-link' to={goodLink}><img src="/img/anypay.png"></img></Link>
      </div>
      <div className='payments-attention'>
        <img src='/img/attention.png'/>
        </div>
    </div>
      )}
      {!isImageLoaded && (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', fontWeight: 'bold', alignITems: 'center',  justifyItems: 'center'}}>
          <p>Loading...</p>
        </div>
      )}
    </Fragment>
  )
}

export default Payments
