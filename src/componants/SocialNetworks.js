import React from 'react';

export const SocialNetworks = () => {



    return (
        <div className="social-network">
        
        <ul className="content">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
            //onMouseOver={anim}
          >
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
            //onMouseOver={anim}
          >
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </a>
            </ul>
        </div> 
    );
};
