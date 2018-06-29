import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Step3 extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: '',
      rent: ''
    }
  }
  changMortgage(value) {
    this.setState({mortgage: value})
  }
  changeRent(value) {
    this.setState({rent: value})
  }
  addHouse = () => {
    const {name, address, city, state, zip} = this.state
    axios.post('/houses', {name: name, address: address, city: city, state: state, zip: zip}).then(res => {})
  }
  render() {
    return (
      <div>
        Add New Listing
        <br />
        <input className='Step3' placeholder='Mortgage' onChange={e => this.changeMortgage(e.target.value)}/>
        <br />
        <input className='Step3' placeholder='Rent' onChange={e => this.changeRent(e.target.value)}/>
        <br />
        <Link to='/wizard/step2'><button>Previous Step</button></Link>
        <Link to='/' className='links'><button onClick={this.addHouse}>Complete</button></Link>
      </div>
    )
  }
}
