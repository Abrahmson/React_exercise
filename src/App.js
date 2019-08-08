import React from 'react';
import {Route, NavLink,Redirect,Switch} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";

import './active.css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/*<a className="list-group-item" href="./about.html">About</a>*/}
                {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                <NavLink className="list-group-item" activeClassName='active' to='/home'>Home</NavLink>
                <NavLink className="list-group-item" activeClassName='active' to='/about'>About</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Redirect to='/about'/>
                    {/*<Home />*/}
                    {/*<About />*/}
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

// App.propTypes = {};

export default App;

