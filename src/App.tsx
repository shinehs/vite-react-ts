import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import routes from './routes/index'
import logo from './assets/logo.svg'
import './App.css'
const App = () => {
  // 获取运行环境
  // console.log('import.meta.env', import.meta.env)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + TS!</p>
        <Router>
          <Link to="/about">About</Link><Link to="/help">help</Link>
          <Switch>
            {
              routes.map(route =>
                <Route exact key={route.path} path={route.path}>
                  <route.component />
                </Route>
              )
            }
          </Switch>

        </Router>
      </header>
    </div>
  )
}

export default App
