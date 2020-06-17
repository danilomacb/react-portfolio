import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-lightbox/style.css";

import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={Projects} />
        <Route path="/artigos" exact component={Articles} />
        <Route path="/certificados" exact component={Certificates} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
