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
      <Navbar setToken={setToken} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
