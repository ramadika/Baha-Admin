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
import Men from 'components/Product-Page/ListMen-Page'
import AddProduct from 'components/Product-Page/Form-Page'
import OrderList from 'components/ListOrder-Page'
import UserList from 'components/ListUser-Page'
import AdminList from 'components/ListAdmin-Page'

ReactDOM.render(
  <Router>
    <DataProvider>
      <Switch>
          <Route exact path="/" component={Login} />
          <BaseLayout>
            <Route path="/home" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/men" component={Men} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/order" component={OrderList} />
            <Route path="/user" component={UserList} />
            <Route path="/admin" component={AdminList} />
          </BaseLayout>
      </Switch>
    </DataProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
