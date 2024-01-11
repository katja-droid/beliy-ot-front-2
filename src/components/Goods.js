import {React, useState, Fragment}  from 'react';
import goods from '../goods';  // Assuming '../goods' is the correct path to your goods.js file
import './Goods.css'
import { Link, useParams } from 'react-router-dom';
const Goods = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
    const { category } = useParams();
  return (
    <div>
      <img
        src="/img/BG.png"
        alt="Background"
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      {isImageLoaded && (
        <div>
         <div className='support'>
          <img src="/img/Support 1.png" alt="logo" />
      
          <img src="/img/Support 2.png" alt="logo" />
      </div>
        <div className='attention'>
        <img src='/img/attention.png'></img>
        </div>
    <div className='goods-wrap'>
      
        {goods.map((item) => item.category===category?(
            
            <div className='good' key={item.id}>
                
                <Link to={`/payments/${item.id}`}>
          <img  src={item.url} alt={`Product ${item.category} ${item.id}`} />
          </Link>
          </div>
        
        ):null)}

      
    </div>
    </div>)}
    {!isImageLoaded && (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', fontWeight: 'bold', alignItems: 'center',  justifyContent: 'center'}}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Goods;
