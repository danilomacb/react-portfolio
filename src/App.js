import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ContentSelector from "./components/ContentSelector";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={ContentSelector} />
        <Route path="/artigos" exact component={ContentSelector} />
        <Route path="/certificados" exact component={ContentSelector} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
