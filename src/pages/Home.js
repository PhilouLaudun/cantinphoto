import React from 'react';
import Navigation from '../componants/Navigation';
import Logo from '../componants/Logo';
import SocialNetworks from '../componants/SocialNetworks';

const Home = () => {
  return (
    <main>
      <div className="home">
        <Navigation />
        <Logo />
        <SocialNetworks/>
        <div className="bg-image"></div>     
        <div className="home-main">
          <div className="main-content">
            <h1> Charles CANTIN</h1>
            <h2>Photographe</h2>
            
          </div>
          <h3>Mariage - Grossesse - Bébé - Famille - Baptême - Couple</h3>
        </div> 
      </div>


    </main>
  );
};

export default Home;
