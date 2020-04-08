import React, { useState } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [{activeItem}, setItem] = useState({activeItem: 'home'})
  const handleItemClick = (e, { name }) => {
    setItem({ activeItem: name });
  };
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <NavLink to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
            asLink={NavLink}
          >
            Emma-Maria Thalén
          </Menu.Item>
        </NavLink>
        <NavLink to="/about">
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={handleItemClick}
            asLink={NavLink}
          >
            About
          </Menu.Item>
        </NavLink>
      </Menu>
    </Segment>
  );
}

export default Header;
