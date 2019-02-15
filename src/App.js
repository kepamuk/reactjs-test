import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import connect from 'react-redux/es/connect/connect';

import './App.css';
import NavbarMenu from './components/navbar'
import Main from './components/main';
import Good from './components/good';
import Cart from './components/cart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarMenu/>
        <Container>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/good/:id" component={Good}/>
            {(this.props.cart.length) ? <Route path="/cart" component={Cart}/> : null}
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default withRouter(connect(mapStateToProps, {})(App));
