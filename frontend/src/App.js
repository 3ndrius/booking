import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Switch>
         <Route path="/" exact component={null} />
         <Route path="/auth" exact component={null} />
         <Route path="/events" exact component={null} />
         <Route path="/bookings" exact component={null} />
       </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
