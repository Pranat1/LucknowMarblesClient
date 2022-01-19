import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

//import AuthPage from './pages/Auth';
import ProductsPage from "./pages/product";
import AttributesPage from "./pages/attributes";
import SalePage from "./pages/sale";
import MainNavigation from "./components/Navigation/MainNavigation";
import PurchasePage from "./pages/purchase";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = () => {
  return (
    <BrowserRouter>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
      <React.Fragment>
        <MainNavigation />
        <main className="main-content">
          <Switch>
            <ApolloProvider client={client}>
              <Route path="/product" component={ProductsPage} />
              <Route path="/purchase" component={PurchasePage} />
              <Route path="/attributes" component={AttributesPage} />
              <Route path="/sale" component={SalePage} />
            </ApolloProvider>
          </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
