import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Adlist from "./components/Adlist/Adlist";
import Adview from "./components/Adview/Adview";

class App extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Header />
          <Switch>
            <Route exact path="/" component={Adlist} />
            <Route path="/adview" component={Adview} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
