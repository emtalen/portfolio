import React from 'react'
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

const App = () => {
  // const projects = useSelector((state) => state.projects);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
};


export default App
