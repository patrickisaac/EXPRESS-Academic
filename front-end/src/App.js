import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav'

const App = () => (
    <div>
      <BrowserRouter>
        <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/dancers' component={Main} />
          <Route path='/events' component={Main} />
          <Route path='/contact' component={Main} />
        </Switch>
        </div>
      </BrowserRouter>
    </div> 
)

export default App;
