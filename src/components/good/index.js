import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, ListGroup, ListGroupItem, Button} from 'reactstrap';

import {fetchPhone} from '../../redux/actions/phoneAction';
import {getCart, postCart} from '../../redux/actions/cartAction';

class Good extends Component {

  componentDidMount() {
    this.props.fetchPhone(this.props.match.params.id);
    this.props.getCart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchPhone(this.props.match.params.id)
    }
  }

  postCart(good) {
    if (this.props.cart.findIndex(x => x.id === good.id) === -1) {
      this.props.postCart(good)
    } else {
      alert('good already added');
    }
  }

  render() {
    const {battery, camera, cpu, image, description, display, memory, name, price, size, weight} = this.props.phone;
    const img = process.env.PUBLIC_URL + image;

    return (
      <Row>
        <Col sm="6">
          <img src={img} alt=""/>
        </Col>
        <Col sm="6">
          <ListGroup>
            <ListGroupItem>{name}</ListGroupItem>
            <ListGroupItem>{battery}</ListGroupItem>
            <ListGroupItem>{camera}</ListGroupItem>
            <ListGroupItem>{cpu}</ListGroupItem>
            <ListGroupItem>{description}</ListGroupItem>
            <ListGroupItem>{display}</ListGroupItem>
            <ListGroupItem>{memory}</ListGroupItem>
            <ListGroupItem>{price}</ListGroupItem>
            <ListGroupItem>{size}</ListGroupItem>
            <ListGroupItem>{weight}</ListGroupItem>
            <ListGroupItem>
              <Button
                onClick={this.postCart.bind(this, this.props.phone)}
                color="primary"
              >Add to cart</Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  phone: state.phones.phone,
  cart: state.cart.cart
});

export default connect(mapStateToProps, {fetchPhone, getCart, postCart})(Good);