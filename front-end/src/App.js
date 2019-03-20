import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Dancers from './Components/Dancers'
import Events from './Components/Events'
import Contact from './Components/Contact'

const App = () => (
    <div>
      <BrowserRouter>
        <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/dancers' component={Dancers} />
          <Route path='/events' component={Events} />
          <Route path='/contact' component={Contact} />
        </Switch>
        </div>
      </BrowserRouter>
    </div> 
)

export default App;
