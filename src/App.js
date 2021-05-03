import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error from "./pages/Error";
import persistedStore from "./redux/store";
import { Provider } from "react-redux";
import Home from "./pages/Home";

const App = () => {
  const { store } = persistedStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
