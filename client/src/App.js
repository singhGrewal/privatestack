import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/auth/Login";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, logoutUser} from './store/action/authAction';

import {Provider} from 'react-redux';
import store from './store/store';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App container lg mt-4">
            {/*<Navbar />*/}
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/login" component={Login}/>

              {/* <Route path="/project/:id" component={SignUp} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={SignUp} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
