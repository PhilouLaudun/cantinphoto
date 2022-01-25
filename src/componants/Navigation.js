import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <div className="navigation">
        <ul>
          <NavLink
            end
            to="/"
            className={(navdata) => (navdata.isActive ? "navactive" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            end
            to="/PortFolio"
            className={(navdata) => (navdata.isActive ? "navactive" : "")}
          >
            <li>portfolio</li>
          </NavLink>
          <NavLink
            end
            to="/price"
            className={(navdata) => (navdata.isActive ? "navactive" : "")}
          >
            <li>Prix</li>
          </NavLink>
          <NavLink
            end
            to="/contact"
            className={(navdata) => (navdata.isActive ? "navactive" : "")}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    );
};

export default Navigation;
