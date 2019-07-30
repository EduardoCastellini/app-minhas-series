import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import NewSeries from "./Components/NewSeries";
import About from "./Components/About";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={NewSeries} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}
