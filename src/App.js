import React from 'react';
import './App.css';
import { Header } from './ui-component-library';
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import routes from './routes';
import Container from "react-bootstrap/Container"

function App() {
  return (
      <HashRouter>
        <Container fluid>
        <Header />
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} exact {...route} />;
          })}
          <Redirect exact from="/" to="home" />
        </Switch>
        </Container>
      </HashRouter>
  );
}

export default App;
