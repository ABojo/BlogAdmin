import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import useToken from '../hooks/useToken';
import React from 'react';

function App() {
  const { token, setToken } = useToken();

  if (!token) return <Login setToken={setToken} />;

  return (
    <React.Fragment>
      <Router>
        <Navbar setToken={setToken} />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route exact path="/create">
            <h1>Create Page</h1>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
