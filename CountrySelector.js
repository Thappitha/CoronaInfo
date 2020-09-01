import React, { Component } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import CoronaInfo from './CoronaInfo';
class CountrySelector extends Component {
  constructor(props) {
    super(props)
 
    this.options = countryList().getData()
 
    this.state = {
      options: this.options,
      value: '',
    }
  }
 
  renderResult() {
    const CountryName = this.state.value;
    if (CountryName.value==="IN") {
      return (
        <div>
          <CoronaInfo/>
        </div>
      );
    }
  }
 
  render() {
    const Screensize={
      width: '80%',
      margin: '0 auto',
      fontSize: '14px',
      marginTop: '35px'
    }
    return (
      <div style={Screensize}>
      <Select
        options={this.state.options}
        value={this.state.value}
        onChange={(value) => this.setState({value })}
      />
      {this.renderResult()}
      </div>
    )
  }
}




export default CountrySelector;