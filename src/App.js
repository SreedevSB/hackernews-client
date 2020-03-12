import React from "react";
import Items from "./Items";
import ItemPage from "./Itempage";

import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Items />
          </Route>
          <Route path="/:postid">
            <ItemPage />
          </Route>
          <Route>
            <div>Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
