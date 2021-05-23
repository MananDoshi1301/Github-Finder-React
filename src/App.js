import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import GithubState from './context/github/GithubState';
import './App.css';
import About from './components/pages/About';

const App = () => {

  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setState({ users: res.data, loading: false })
  // }









  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  }



  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/'
                render={props => {
                  return <Fragment>
                    <Search

                      setAlert={showAlert}
                    />
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
    </GithubState>
  );


}

export default App;
