import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';
import About from './components/pages/About';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/'
                  render={props => {
                    return <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  }} />
                <Route
                  exact path={'/about'}
                  component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );


}

export default App;
