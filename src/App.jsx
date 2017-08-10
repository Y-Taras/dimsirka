// @flow

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './containers/Landing'
import Webcams from './containers/Webcams'
import Header from './components/Header'

const FourOhFour = () => <h1>404</h1>




const App = (props) =>
  <BrowserRouter>
      <div className="app">
        <Header {...props}/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Authenticated exact path="/documents" component={FourOhFour} {...props} />
          <Public path="/signup" component={FourOhFour} {...props} />
          <Public path="/login" component={FourOhFour} {...props} />
          <Route name="recover-password" path="/recover-password" component={FourOhFour} />
          <Route name="reset-password" path="/reset-password/:token" component={FourOhFour} />
          <Route path="/adoption" component={FourOhFour} />
          <Route path="/lost" component={FourOhFour} />
          <Route path="/volunteer" component={FourOhFour} />
          <Route path="/aboutUs" component={FourOhFour} />
          <Route path="/webcams" component={Webcams} />
          <Route path="/register" component={FourOhFour} />
          <Route path="/donate" component={FourOhFour} />
          <Route path="/news" component={FourOhFour} />
          <Route path="/shop" component={FourOhFour} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
  </BrowserRouter>

export default App
