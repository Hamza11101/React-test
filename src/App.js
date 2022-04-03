import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import NotFound from "./Components/NotFound";
import Profile from "./Components/Profile";

function App() {
  return (
  
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/profile/:id">
              <Profile/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
