import React, {Component} from 'react';
import {Input, Button} from 'reactstrap';
import connect from 'react-redux/es/connect/connect';

import {fetchPhonesAll, filterPhones, fetchPhones} from '../../redux/actions/phoneAction';

let filter = {};

class Filter extends Component {

  onChange(e) {

    let str = '';

    const options = e.target.options;
    const value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    filter[e.target.name] = value;

    for (let key in filter) {
      if (filter.hasOwnProperty(key)) {
        str = this.filterLoop(filter, key, str);
      }
    }

    str = str.slice(0, -1);

    this.props.filterPhones(str)

  }

  filterLoop(filter, key, str) {
    filter[key].forEach(e => str += key + '=' + e + '&')
    return str;
  }

  onClear = () => {
    this.props.fetchPhones(3);
    this.myFormRef.reset();
  }

  render() {

    const cpu = [];
    const memory = [];

    this.props.phonesAll.forEach(e => {
      if (cpu.indexOf(e.cpu) === -1) {
        cpu.push(e.cpu)
      }
      if (memory.indexOf(e.memory) === -1) {
        memory.push(e.memory)
      }
    });

    return (
      <fieldset
        disabled={this.props.search}
      >
        <form
          ref={(el) => this.myFormRef = el}
        >

          <Input
            type="select"
            name="cpu"
            id="cpu"
            onChange={this.onChange.bind(this)}
            defaultValue=""
          >
            <option disabled={true} value="">CPU</option>
            {cpu.map((e, i) => {
              return <option key={i}>{e}</option>
            })}
          </Input>

          <Input
            type="select"
            name="memory"
            id="memory"
            multiple
            onChange={this.onChange.bind(this)}
            style={{marginTop: '20px'}}
          >
            {memory.map((e, i) => {
              return <option value={e} key={i}>{e}</option>
            })}
          </Input>

          <Button
            disabled={!this.props.filter}
            onClick={this.onClear.bind(this)}
            style={{marginTop: '20px'}}
          >
            Clear filter
          </Button>

        </form>
      </fieldset>
    );
  }
}

const mapStateToProps = state => ({
  phonesAll: state.phones.phonesAll,
  search: state.phones.search,
  filter: state.phones.filter
});

export default connect(mapStateToProps, {fetchPhonesAll, filterPhones, fetchPhones})(Filter);