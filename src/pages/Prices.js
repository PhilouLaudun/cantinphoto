import React from 'react';
import Carte from '../componants/Carte';
import Logo from '../componants/Logo';
import Navigations from "../componants/Navigations";
import SocialNetworks from '../componants/SocialNetworks';

const Prices = () => {
  return (
    <main>
      {/*page principale */}
      <div className="prestation">
        {/*composants : logo, navigation, réseaux sociaux*/}
        <Navigations />
        <Logo />
        <SocialNetworks />
        {/*fond animé */}
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        {/*Contenu de la page */}
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
