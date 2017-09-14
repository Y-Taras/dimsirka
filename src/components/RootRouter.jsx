// @flow

import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom';

const RootRouter = ({
  component: Component,
  exact,
  path,
  urlPrefix
}: {
  component: ReactClass<*>,
  exact: boolean,
  path: string,
  urlPrefix: string
}) => (
  <Route
    exact={exact}
    path={path}
    render={(props: ContextRouter) =>
      props.location.pathname === '/' && urlPrefix !== '' ? (
        <Redirect to={`/${urlPrefix}`} />
      ) : (
        <Component {...props} urlPrefix={urlPrefix} />
      )}
  />
);

export default RootRouter;
