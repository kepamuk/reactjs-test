import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import {postCart, getCart} from '../../redux/actions/cartAction';

class GoodCard extends Component {

  componentDidMount() {
    this.props.getCart()
  }

  postCart(good) {
    if (this.props.cart.findIndex(x => x.id === good.id) === -1) {
      this.props.postCart(good)
    } else {
      alert('good already added');
    }
  }

  render() {
    const {id, name, description, display, image, price} = this.props.good;
    const img = process.env.PUBLIC_URL + image;
    const shortDescr = description.substring(0, 50) + '...';
    return (
      <Col
        sm="4"
        style={{marginBottom: '20px'}}
      >
        <Card>
          <CardImg style={{cursor: "pointer"}}
                   top
                   width="100%"
                   src={img}
                   alt={name}
                   onClick={() => {
                     this.props.history.push('/good/' + id)
                   }}
          />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{display}</CardSubtitle>
            <CardText>{shortDescr}</CardText>
            <CardText>{price} rub</CardText>
            <Button onClick={() => {
              this.props.history.push('/good/' + id)
            }}>Show More</Button>
            <Button
              onClick={this.postCart.bind(this, this.props.good)}
              color="primary"
            >Add to cart</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default withRouter(connect(mapStateToProps, {postCart, getCart})(GoodCard));