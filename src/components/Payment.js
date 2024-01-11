import {React, useState, Fragment} from 'react'
import CopyBadge from './CopyBadge'
import './Payment.css'
const Payment = () => {
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
        <div>
      <div className='support-pay'>
          <img src="/img/Support 1.png" alt="logo" />
      
          <img src="/img/Support 2.png" alt="logo" />
      </div>
      <div className='payments-attention'>
        <img src='/img/Attention.png'/>
        </div>
    <div className="payment-info-wrapper">
    
      <div className='payment-info-content'>
      
      Binance ID
     <div className="payment-info"> 309 936 184 <CopyBadge  textToCopy="309 936 184"/></div>
<br/>
USDT - Tron (TRC20)
<div className="payment-info">TFkABCYVmb1UmB41a898TJftcmT25Hs8Q7 <CopyBadge  textToCopy="TFkABCYVmb1UmB41a898TJftcmT25Hs8Q7"/></div>
<br/>
USDT - Ethereum (ERC20)
<div className="payment-info">T0xc9fa5ac7b0d1f36786bc31feeeadc790990d27cf  <CopyBadge textToCopy="T0xc9fa5ac7b0d1f36786bc31feeeadc790990d27cf"/></div>
<br/>
ETX - Ethereum (ERC20)
<div className="payment-info">0xc9fa5ac7b0d1f36786bc31feeeadc790990d27cf  <CopyBadge textToCopy="0xc9fa5ac7b0d1f36786bc31feeeadc790990d27cf"/></div>
<br/>
TRX - Tron (TRC20)
<div className="payment-info">TFkABCYVmb1UmB41a898TJftcmT25Hs8Q7  <CopyBadge textToCopy="TFkABCYVmb1UmB41a898TJftcmT25Hs8Q7"/></div>
    </div>
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

export default Payment