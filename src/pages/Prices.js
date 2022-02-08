import React from 'react';
import Carte from '../componants/Carte';
import Logo from '../componants/Logo';
import Navigations from "../componants/Navigations";
import SocialNetworks from '../componants/SocialNetworks';

const Prices = () => {
  return (
    <main>
      <div className="prestation">
        <Navigations />
        <Logo />
        <SocialNetworks />
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="content">
          <Carte carteNumber={0} />
          <Carte carteNumber={1} />
          <Carte carteNumber={2} />
          <Carte carteNumber={3} />
          <Carte carteNumber={4} />
          <Carte carteNumber={5} />
        </div>
      </div>
    </main>
  );
};

export default Prices;
