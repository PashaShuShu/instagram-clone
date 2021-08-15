import classes from './App.module.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/home/Home';


function App() {
  return (
    <div className={classes.app}>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={()=>
            true? 
            <Redirect to="/home" />
            :
            <Redirect to="/login" />
          }/>
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/chat">
          chat
        </Route>
        <Route path="/compass">
          compass
        </Route>
        <Route path="/likes">
          likes
        </Route>
        <Route path="/profile/:userId?">
          profile
        </Route>
        <Route path="/login">
          login
        </Route>
      </Switch>
    </div>
  );
}

function BrowserRouteApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>)
}

export default BrowserRouteApp;
