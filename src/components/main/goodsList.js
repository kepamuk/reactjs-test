import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {Row, Button} from 'reactstrap';

import {fetchPhones, fetchPhonesAll} from '../../redux/actions/phoneAction';
import GoodCard from './goodCard';
import Search from './search';

class GoodsList extends Component {

  constructor() {
    super();

    this.state = {
      limit: 3
    }
  }

  componentDidMount() {
    this.props.fetchPhones(this.state.limit);
    this.props.fetchPhonesAll();
  }

  onLoadMore() {
    const addLimit = this.state.limit + 3;

    this.props.fetchPhones(addLimit);

    this.setState({
      limit: addLimit
    })
  }

  render() {

    const phonesLength = this.props.phonesAll.length;
    const currentLength = this.props.phones.length;

    const showMore = (phonesLength > currentLength && (!this.props.search && !this.props.filter)) ? <Button
      style={{float: 'right'}}
      onClick={this.onLoadMore.bind(this)}
    >Show More</Button> : null;

    const goods = this.props.phones.map((e, i) => {
      return <GoodCard key={i} good={e}/>
    });

    const searchMode = (this.props.search) ? <h4>You are in search mode</h4> : null;

    return (
      <React.Fragment>
        <Search/>
        {searchMode}
        <Row>
          {goods}
        </Row>
        {showMore}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  phones: state.phones.phones,
  phonesAll: state.phones.phonesAll,
  search: state.phones.search,
  filter: state.phones.filter
});

export default connect(mapStateToProps, {fetchPhones, fetchPhonesAll})(GoodsList);