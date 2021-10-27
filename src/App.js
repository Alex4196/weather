import React from "react";
import { Route } from "react-router-dom";
import styles from "./App.module.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <>
    <Route path="/" exact component={Cards}/>
    <Route path="/" component={Nav} />
    <Route path="/" exact component={SearchBar} />
    <Route path="/about" component={About} />
    </>
  )
}

export default App;