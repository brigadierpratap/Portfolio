import "./App.css";
import Home from "./Components/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import NavBar from "./Components/Nav";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="App" style={{ fontFamily: "times" }}>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
