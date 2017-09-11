// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getLang } from './reducers/locale';

import Landing from './containers/Landing';
import Webcams from './containers/Webcams';

import News from './containers/News';
import Post from './containers/Post';
import Header from './containers/Header';
import Footer from './components/Footer';

const FourOhFour = () => <h1>404</h1>;

const Routes = ({ lang }: { lang: string }) =>
    <BrowserRouter basename={`/${lang}`}>
      <div className="app">
        <Route render={(props: { location: {} }) => <Header {...props} />} />
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route path={'/webcams'} component={Webcams} />
          <Route exact path={'/news'} lang= {lang} component={News} />
          <Route exact path={'/news/:id'} component={Post} />
          <Route path={'/shop'} component={FourOhFour} />
          <Route path={'/test'} component={FourOhFour} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>

const mapStateToProps = state => ({ lang: getLang(state.locale) });

export default connect(mapStateToProps)(Routes);
