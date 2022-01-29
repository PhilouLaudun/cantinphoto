import React from 'react';
import Logo from '../componants/Logo';
import Navigation from '../componants/Navigation';

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Navigation />
        <Logo />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>12 rue du code </p>
              <p>34000 MONTPELLIER</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone </h4>
              <p>04 67 66 66 66 </p>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email </h4>
              <p>charles.cantin@orange.fr</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

