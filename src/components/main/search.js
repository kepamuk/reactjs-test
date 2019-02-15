import React, {Component} from 'react';
import {InputGroup, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchPhones, searchPhone} from '../../redux/actions/phoneAction';

class Search extends Component {

  onSearch(e) {
    if (e.target.value.length) {
      this.props.searchPhone(e.target.value);
    } else {
      this.props.fetchPhones(3);
    }
  }

  render() {
    return (
      <div style={{marginBottom: '20px'}}>
        <InputGroup>
          <Input
            placeholder="Search"
            onKeyUp={this.onSearch.bind(this)}
            disabled={this.props.filter}
          />
        </InputGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.phones.filter
});

export default connect(mapStateToProps, {searchPhone, fetchPhones})(Search);