import React, {Component} from 'react';

import {Row, Col} from 'reactstrap';
import GoodsList from './goodsList';
import Filter from './filter';

class Main extends Component {
  render() {
    return (
      <Row>
        <Col sm="3">
          <Filter/>
        </Col>
        <Col sm="9">
          <GoodsList/>
        </Col>
      </Row>
    );
  }
}

export default Main;