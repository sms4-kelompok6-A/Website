import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import {Home} from './pages'
import AddPost from './pages/addPost'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route  path="/" component={Home} exact/>
              <Route  path="/addPost" component={AddPost} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
