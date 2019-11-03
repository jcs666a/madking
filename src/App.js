import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Stores from './components/Stores/Stores';
import Orders from './components/Orders/Orders';
import Error404 from './components/Error404/Error404';
import { token } from './constants/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token
    }
  }

  updateToken = newToken => {
    this.setState({
      token: newToken
    });
  }

  render() {
    const {token} = this.state;
    return (
      <Router>
        <Header />
        <section className="body-content container">
          <Switch>
            <Route exact path="/" component={()=> (<Stores token={token} updateToken={this.updateToken} />)} />
            <Route exact path="/orders/:shop/:mk" component={(routeProps) => (<Orders token={token} {...routeProps} updateToken={this.updateToken} />)} />
            <Route path="/" component={Error404} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
