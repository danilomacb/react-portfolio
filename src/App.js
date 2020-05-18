import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Certificates from "./components/Certificates";

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
    </BrowserRouter>
  );
}

export default App;
