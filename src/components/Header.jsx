import React, { useState } from 'react';
import { Segment, Menu } from 'semantic-ui-react';

const Header = () => {
  const [{activeItem}, setItem] = useState({activeItem: 'home'})
  const handleItemClick = (e, { name }) => {
    setItem({ activeItem: name });
  };
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Emma-Maria Thalén
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
        >
          About
        </Menu.Item>
      </Menu>
    </Segment>
  );
}

export default Header;
