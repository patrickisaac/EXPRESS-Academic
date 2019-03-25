import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Components/Main'
import DancersPage from './Components/DancersPage'
import EventPage from './Components/EventPage'
import ContactPage from './Components/ContactPage'
import DancerDetails from './Components/DancerDetails'

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/dancers' component={DancersPage} />
          <Route path='/dancers/:id' component={DancerDetails} />
          <Route path='/events' component={EventPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)

export default App;
