import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect,  Switch} from 'react-router-dom';


import Auth from './pages/Auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Switch>
         <Redirect path="/" to="/auth" exact />
         <Route path="/auth" component={Auth} />
         <Route path="/events"  component={null} />
         <Route path="/bookings" component={null} />
       </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
