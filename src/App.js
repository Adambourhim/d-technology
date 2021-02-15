import "./App.css";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage/Homepage";
import Footer from "./Footer/footer";
import Service from "./Service/Main/Service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Service" component={Service} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
