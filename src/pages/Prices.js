import React from 'react';
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
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div>
          <h1> Page Prix et prestations</h1>
        </div>
      </div>
    </main>
  );
};

export default Prices;
