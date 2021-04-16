// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { DataProvider } from 'components/Context'

// Internals
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

// Apps
import Login from 'components/Login-Page'
import BaseLayout from 'components/Base-Layout'
import Home from 'components/Home-Page'
import Product from 'components/Product-Page'

ReactDOM.render(
  <Router>
    <Switch>
      <DataProvider>
        <Route exact path="/" component={Login} />
        <BaseLayout>
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
        </BaseLayout>
      </DataProvider>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
