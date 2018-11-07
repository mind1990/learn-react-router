import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from './components/users/Users';

import userData from './data/user-data.json';

import './App.css';

class App extends Component {
  state = {
    user: [],
    users: [],
  }

  componentDidMount() {
    this.setState({users: userData});
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/users' render={() => <Users users={users} />} />
              <Route path='test' render={() => <About user={this.state.user} />} />
            </Switch>
          </div>
      </div>
    );
  }
}

    

export default App;
