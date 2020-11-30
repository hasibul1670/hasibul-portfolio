import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";



import './App.css';
import Home from "./Components/Home/Home";
import Project from "./Components/Project/Project";


function App() {
  return (
    <div >
      
    <Router>
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/project"><Project></Project></Route>
      <Route path=""></Route>
      <Route path=""></Route>
      <Route path=""></Route>
    
      </Switch>
    </Router>
    </div>
  );
}

export default App;
