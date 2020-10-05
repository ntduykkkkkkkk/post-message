import React from 'react';
import PostMessages from './components/PostMessages';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './actions/store';
import { Container, AppBar, Typography } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">Post Box</Typography>
        </AppBar>
        <PostMessages />
      </Container>
    </Provider>
    
  );
}

export default App;
