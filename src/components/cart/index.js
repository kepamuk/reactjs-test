import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

import {deleteCartById} from '../../redux/actions/cartAction';

class Cart extends Component {

  onDelete(id) {
    this.props.deleteCartById(id);
    if (this.props.cart.length === 1) {
      this.props.history.push('/')
    }
  }


  render() {
    const cartItems = this.props.cart.map((e, i) => {
      return <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{e.name}</td>
        <td>
          <img style={{width: '100px'}} src={process.env.PUBLIC_URL + e.image} alt=""/>
        </td>
        <td>
          <Button color="danger" onClick={this.onDelete.bind(this, e.id)}>X</Button>
        </td>
      </tr>
    });

    return (
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {cartItems}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default withRouter(connect(mapStateToProps, {deleteCartById})(Cart));