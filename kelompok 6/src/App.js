import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import Home from './pages/Home'
import AddPost from './pages/addPost'
import Login from './pages/loginAdmin'
import { ProvideAuth } from './auth/auth';
import { RequireAuth } from './auth/requireAuth';

export default class App extends Component {
  render() {
    return (
      <ProvideAuth>
        <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
            <Route exact path="/">
                <RequireAuth><Home/></RequireAuth>
              </Route>
              <Route exact path="/addPost">
              <RequireAuth><AddPost/></RequireAuth>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </ProvideAuth>
    )
  }
}
