import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Switch, BrowserRouter } from "react-router-dom";
import Header from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Switch></Switch>
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
