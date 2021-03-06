// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { DataProvider } from "components/Context";

// Internals
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// Apps
import Login from "components/Login-Page";
import BaseLayout from "components/Base-Layout";
import Home from "components/Home-Page";
import Product from "components/Product-Page";
import ProductDetail from "components/Product-Page/DetailProduct-Page";
import AddProduct from "components/Product-Page/AddProduct-Page";
import EditProduct from "components/Product-Page/EditProduct-Page";
import OrderList from "components/ListOrder-Page";
import OrderDetail from "components/DetailOrder-Page";
import UserList from "components/ListUser-Page";
import UserDetail from "components/DetailUser-Page";
import AdminList from "components/ListAdmin-Page";
import RoleList from "components/ListAdmin-Page/ListRole-Page";
import ARAdd from "components/ListAdmin-Page/ARAdd-Page";
import AMAdd from "components/ListAdmin-Page/AMAdd-Page";
import AdminDetail from "components/DetailAdmin-Page";
import About from "components/About-Page";
import AEdit from "components/About-Page/AEdit-Page";
import Contact from "components/Contact-Page";
import CEdit from "components/Contact-Page/CEdit-Page";

ReactDOM.render(
  <Router>
    <DataProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <BaseLayout>
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/dProduct/:id" component={ProductDetail} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/editproduct/:id" component={EditProduct} />
          <Route path="/order" component={OrderList} />
          <Route path="/dOrder/:id" component={OrderDetail} />
          <Route path="/user" component={UserList} />
          <Route path="/dUser/:id" component={UserDetail} />
          <Route path="/admin" component={AdminList} />
          <Route path="/role" component={RoleList} />
          <Route path="/aRAdmin" component={ARAdd} />
          <Route path="/aMAdmin" component={AMAdd} />
          <Route path="/dAdmin" component={AdminDetail} />
          <Route path="/about" component={About} />
          <Route path="/eAbout" component={AEdit} />
          <Route path="/contact" component={Contact} />
          <Route path="/eContact" component={CEdit} />
        </BaseLayout>
      </Switch>
    </DataProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
