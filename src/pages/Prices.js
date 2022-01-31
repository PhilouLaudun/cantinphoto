import React from 'react';
import Carte from '../componants/Carte';
import Logo from '../componants/Logo';
import Navigation from "../componants/Navigation";
import SocialNetworks from '../componants/SocialNetworks';

const Prices = () => {
  return (
    <main>
      <div className="prestation">
        <Navigation />
        <Logo />
        <SocialNetworks />
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="content">
          <Carte carteNumber={0} />
          <Carte carteNumber={1} />
        </div>
      </div>
    </main>
  );
};

export default Prices;
