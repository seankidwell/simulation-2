import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {connect} from 'react-redux'

class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      State: "",
      zip: ""
    };
  }
  changeName(value) {
    this.setState({ name: value });
  }
  changeAddress(value) {
    this.setState({ address: value });
  }
  changeCity(value) {
    this.setState({ city: value });
  }
  changeState(value) {
    this.setState({ state: value });
  }
  changeZipcode(value) {
    this.setState({ zip: value });
  }
  render() {
    return (
      <div>
        Add New Listing
        <br />
        <input
          className="step1Input"
          placeholder="Name"
          onChange={e => this.changeName(e.target.value)}
        />
        <br />
        <input
          className="step1Input"
          placeholder="Address"
          onChange={e => this.changeAddress(e.target.value)}
        />
        <br />
        <input
          className="step1Input"
          placeholder="City"
          onChange={e => this.changeCity(e.target.value)}
        />
        <br />
        <input
          className="step1Input"
          placeholder="State"
          onChange={e => this.changeState(e.target.value)}
        />
        <br />
        <input
          className="step1Input"
          placeholder="zipcode"
          onChange={e => this.changeZipcode(e.target.value)}
        />
        <br />
        <Link to='/wizard/step2'><button>Next Step</button></Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {name, address, city, State, zip} = state;
  return {
    name,
    address,
    city,
    State,
    zip
  }
}

export default connect(mapStateToProps)(Step1)