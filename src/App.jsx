// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Landing from './containers/Landing';
import Webcams from './containers/Webcams';
/* import Login from './containers/Login'
import Signup from './containers/Signup' */
import Posts from './containers/Posts';
import Post from './containers/Post';
import Header from './containers/Header';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <Router>
    <Provider store={store}>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          {/*        <Authenticated path="/admin" component={FourOhFour} {...props} />
        <Authenticated path="/logout" component={FourOhFour} {...props} />
        <Public path="/signup" component={Signup} {...props} />
        <Public path="/login" component={Login} {...props} /> */}
          <Route exact path="/custody" component={FourOhFour} />
          <Route exact path="/custody/virtual" component={FourOhFour} />
          <Route exact path="/custody/permanent" component={FourOhFour} />
          <Route esact path="/custody/temporary" component={FourOhFour} />
          <Route path="/lost_found" component={FourOhFour} />
          <Route exact path="/help" component={FourOhFour} />
          <Route exact path="/help/stuff" component={FourOhFour} />
          <Route exact path="/help/volunteer" component={FourOhFour} />
          <Route exact path="/help/care_giving_treaty" component={FourOhFour} />
          <Route exact path="/about_us" component={FourOhFour} />
          <Route exact path="/about_us/report" component={FourOhFour} />
          <Route exact path="/about_us/history" component={FourOhFour} />
          <Route exact path="/about_us/team" component={FourOhFour} />
          <Route exact path="/about_us/partners" component={FourOhFour} />
          <Route exact path="/about_us/subprojects" component={FourOhFour} />
          <Route path="/webcams" component={Webcams} />
          <Route path="/register" component={FourOhFour} />
          <Route path="/donate" component={FourOhFour} />
          <Route exact path="/news" component={Posts} />
          <Route exact path="/news:id" component={Post} />
          <Route path="/shop" component={FourOhFour} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </Router>;

export default App;
