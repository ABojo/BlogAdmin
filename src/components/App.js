import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PostList from './PostList';
import Navbar from './Navbar';
import CreateForm from './CreateForm';
import useToken from '../hooks/useToken';
import React, { useState } from 'react';

function App() {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const { token, setToken } = useToken();

  if (!token) return <Login setToken={setToken} />;

  return (
    <React.Fragment>
      <Router>
        <Navbar setToken={setToken} />
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route exact path="/create">
            <CreateForm
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
