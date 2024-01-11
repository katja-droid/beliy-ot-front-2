import { useState, Fragment } from 'react';
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <React.Fragment>
      <img
        src="/img/BG.png"
        alt="Background"
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
    {isImageLoaded && (
         <div className='home'>
         <div className='support-home'>
          <Link to="https://discordapp.com/users/939085635275345952/">
             <img src="/img/Support 1.png" alt="logo" />
             </Link>
             <Link to="https://t.me/Dankwists">
             <img src="/img/Support 2.png" alt="logo" />
             </Link>
         </div>
   
         <div className="home-buttons">
           <Link to="/goods/fortnite" className="image-link-home">
             <img src="/img/Button 1.png" className="home-button" alt="logo" />
           </Link>
           <Link to="/goods/overwatch" className="image-link-home">
             <img src="/img/Button 2.png" className="home-button" alt="logo" />
           </Link>
         </div>
   
         <div className="home-go">
           <Link to="https://t.me/dankwistshop_reviews" className="image-link-home-go">
             <img src="/img/Go.png" className="home-button" alt="logo" />
           </Link>
         </div>
   
         <div className="socials-buttons">
           <Link to="" className="image-link-socials">
             <img src="/img/TikTokCropped.png" className="social-button" alt="logo" />
           </Link>
           <Link to="https://youtube.com/@dankwist2?si=BKPsgfFISOVjFMO7" className="image-link-socials">
             <img src="/img/YoutubeCropped.png" className="social-button" alt="logo" />
           </Link>
         </div>
       </div>
      )}
       {!isImageLoaded && (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', fontWeight: 'bold', alignItems: 'center',  justifyContent: 'center'}}>
          <p>Loading...</p>
        </div>
      )}
   
    </React.Fragment>
  );
};

export default Home;
