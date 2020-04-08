import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
