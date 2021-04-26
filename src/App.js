import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import {LoginPage,Register,UserList} from './component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/user-list">
          <UserList />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
