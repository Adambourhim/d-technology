import "./App.css";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Page1/Main/Main";
import Main2 from "./Page1/Main2/Main2";
import Main3 from "./Page1/Main3/Main3";
import Footer from "./Footer/footer";
import Service from "./Page2/Main/Service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/Service" component={Service} />
          <Route
            path="/"
            render={() => (
              <>
                <Main />
                <Main2 />
                <Main3 />
              </>
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
