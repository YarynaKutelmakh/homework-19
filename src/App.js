import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword'
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path='/' exact>
              <SignIn />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/forgot-password'>
              <ForgotPassword />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;