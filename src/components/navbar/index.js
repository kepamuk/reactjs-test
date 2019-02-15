import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button, Dropdown
} from 'reactstrap';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';

import {deleteCartById, getCart} from '../../redux/actions/cartAction';

class NavbarMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    this.props.getCart();
  }

  onDelete(id) {
    this.props.deleteCartById(id);
    if (this.props.cart.length === 1) this.setState({isOpen: false})
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const cartLength = this.props.cart.length;
    const cartItems = this.props.cart.map((e, i) => {
      return <div key={i} style={{marginBottom: '20px'}}>
        <DropdownItem
          style={{display: 'inline-block', width: 'auto'}}
          onClick={() => {
            this.props.history.push('/good/' + e.id)
          }}>
          {e.name}
        </DropdownItem>
        <Button
          style={{display: 'inline-block', float: 'right', marginRight: '20px'}}
          color="danger"
          onClick={this.onDelete.bind(this, e.id)}
        >X</Button>
      </div>
    });

    return (
      <Navbar
        color="light"
        light expand="md"
        style={{marginBottom: '20px'}}
      >
        <NavbarBrand
          style={{cursor: 'pointer'}}
          onClick={() => {
            this.props.history.push('/')
          }}
        >
          Shop
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Nav className="ml-auto" navbar>
          <Dropdown
            nav
            inNavbar
            isOpen={this.state.isOpen}
            toggle={this.toggle}
          >
            <DropdownToggle nav caret disabled={(!Boolean(cartLength) || this.props.location.pathname === '/cart')}>
              Cart: {cartLength} items
            </DropdownToggle>
            <DropdownMenu right style={{width: '300px'}}>
              {cartItems}

              <DropdownItem divider/>
              <Button style={{marginLeft: '20px'}} onClick={() => {
                this.props.history.push('/cart');
                this.setState({isOpen: false})
              }}>Go to cart</Button>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps, {getCart, deleteCartById})(withRouter(NavbarMenu));