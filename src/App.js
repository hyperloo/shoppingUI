import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import HomePage from "./components/HomePage";
import ProductPage from "./components/Product/ProductPage";
import SellersPage from "./components/SellersPage";
import ErrorPage from "./components/ErrorPage";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route
              exact
              path="/product"
              render={(routeProps) => <ProductPage {...routeProps} />}
            />
            <Route
              exact
              path="/sellers"
              render={(routeProps) => <SellersPage {...routeProps} />}
            />
            <Route
              exact
              path="/"
              render={(routeProps) => <HomePage {...routeProps} />}
            />
            <Route
              exact
              render={(routeProps) => <ErrorPage {...routeProps} />}
            />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}
export default App;
