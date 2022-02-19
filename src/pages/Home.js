import React from 'react';
import Navigations from '../componants/Navigations';
import Logo from '../componants/Logo';
import SocialNetworks from '../componants/SocialNetworks';

const Home = () => {
  return (
    <main>
      {/*page principale */}
      <div className="home">
        {/*composants : logo, navigation, réseaux sociaux*/}
        <Navigations />
        <Logo />
        <SocialNetworks />
        {/*Image de fond */}
        <div className="bg-image"></div>
        {/*Contenu de la page */}
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
