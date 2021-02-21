import "./App.css";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage/Homepage";
import Footer from "./Footer/footer";
import Service from "./Service/Service";
import Product from "./Product/product";
import Technology from "./Technology/technology";
import About from "./About/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Service" component={Service} />
          <Route path="/Product" component={Product} />
          <Route path="/Technology" component={Technology} />
          <Route path="/About" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
