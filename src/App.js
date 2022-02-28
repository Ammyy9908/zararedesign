import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import Story from "./pages/Story";
import Catalog from "./pages/Catalog";
import Item from "./pages/Item";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/stories">
            <Stories />
          </Route>

          <Route
            exact
            path="/story/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <Story id={id && id} />;
            }}
          />
          <Route
            exact
            path="/search/:root"
            render={(props) => {
              const root = props.match.params.root;
              return <Search root={root && root} />;
            }}
          />
          <Route
            exact
            path="/catalog/:type"
            render={(props) => {
              const type = props.match.params.type;
              return <Catalog type={type && type} />;
            }}
          />
          <Route
            exact
            path="/item/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <Item id={id && id} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
