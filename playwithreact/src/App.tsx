import { ThemeProvider } from "styled-components";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import theme from "./utils/theme";
import HomePage from "./views/HomePage";
import ErrorPage404 from "./views/ErrorPage404";
import FlexboxView from "./views/FlexboxView";
import GridView from "./views/GridView";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/404" component={ErrorPage404} />
          <Route path="/flexbox" component={FlexboxView} />
          <Route path="/grid" component={GridView} />
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
