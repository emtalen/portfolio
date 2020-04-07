import React from "react";
import { Container, Icon } from "semantic-ui-react";

const Home = () => {
  return (
    <div id="home">
      <Container className="trans">
        <h2 id="myname">I am Emma-Maria Thalen</h2>
        <h3 id="what-i-do"> equestrian | junior developer </h3>
        <a
          href="https://www.linkedin.com/in/emma-maria-thal%C3%A9n-3aba66173/"
          target="blank"
        >
          <Icon size="huge" name="linkedin" color="black" />
        </a>
        <a href="https://github.com/emtalen" target="_blank">
          <Icon size="huge" name="github" color="black" />
        </a>
        <a href="https://www.facebook.com/emmamaria.thalen" target="_blank">
          <Icon size="huge" name="facebook" color="black" />
        </a>
        <a href="https://www.instagram.com/emthalen/?hl=sv" target="_blank">
          <Icon size="huge" name="instagram" color="black" />
        </a>
      </Container>
    </div>
  );
};

export default Home;
