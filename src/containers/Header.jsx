// @flow

import React from 'react'

import Contacts from '../components/Contacts'
import Navigation from '../components/Navigation'
/*
import PublicNavigation from './PublicNavigation.js'
import AuthenticatedNavigation from './AuthenticatedNavigation.js'

const renderNavigation = authenticated => (authenticated ? <AuthenticatedNavigation /> : <PublicNavigation />)
*/

const Header = (/* { authenticated }: { authenticated: Boolean } */) =>
  <header className="header">
    <div className="header__top">
        <Contacts/>
    </div>
    <div className="container">
        <Navigation/>
    </div>
  </header>

export default Header
