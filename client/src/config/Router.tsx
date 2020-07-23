import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import config  from './config'

const Router: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Switch>
        {Object.keys(config.routes).map(routeKey => <Route key={config.routes[routeKey].path} exact path={config.routes[routeKey].path} component={config.routes[routeKey].component} />)}
      </Switch>
    </>
  )
}

export default Router