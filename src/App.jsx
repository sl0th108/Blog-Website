import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single1";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Single1 from "./pages/single/Single1";
import Single2 from "./pages/single/Single2";
import Single3 from "./pages/single/Single3";
import Single4 from "./pages/single/Single4";
import Single5 from "./pages/single/Single5";
import Contact from "./pages/contact/Contact";
import Authors from "./pages/authers/Authors";


function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">
          {currentUser ? <Homepage /> : <Login />}
        </Route>
        <Route path="/post1/:id">
          <Single1 />
        </Route>
        <Route path="/post2/:id">
          <Single2 />
        </Route>
        <Route path="/post3/:id">
          <Single3 />
        </Route>
        <Route path="/post4/:id">
          <Single4 />
        </Route>
        <Route path="/post5/:id">
          <Single5 />
        </Route>
        <Route path="/authors">{currentUser ? <Authors /> : <Login />}</Route>
        <Route path="/contact">{currentUser ? <Contact /> : <Login />}</Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        
        {/* <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
