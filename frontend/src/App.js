import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect,  Switch} from 'react-router-dom';


import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Events from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Switch>
         <Redirect path="/" to="/auth" exact />
         <Route path="/auth" component={Auth} />
         <Route path="/events"  component={Events} />
         <Route path="/bookings" component={Bookings} />
       </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
