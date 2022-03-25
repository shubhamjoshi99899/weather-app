import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Signup from "./pages/Registeration";
import Login from "./pages/Login";
import Temp from "./pages/Weather";
import Places from "./pages/Places";
import Service from "./pages/Service";



const App = () => {
  return (
    <>
      <Switch>
      <Route exact path="/" component={Landing}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/services" component={Service}></Route>
        <Route path="/register" component={Signup}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/weather" component={Temp}></Route>
          <Route path="/places" component={Places}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
