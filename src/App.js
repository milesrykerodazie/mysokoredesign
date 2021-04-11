import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountPage from "./Pages/AccountPage";
import BagPage from "./Pages/BagPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/accountPage" from component={AccountPage}>
            <AccountPage />
          </Route>
          <Route path="/bagPage" from component={BagPage}>
            <BagPage />
          </Route>
          <Route path="/productPage" from component={ProductPage}>
            <ProductPage />
          </Route>
          <Route path="/" from component={HomePage}>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
