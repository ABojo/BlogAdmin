import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import useToken from '../hooks/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) return <Login setToken={setToken} />;

  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" children={<Dashboard />} />
      </Switch>
    </Router>
  );
}

export default App;
