import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      image: ''
    }
    this.changeImage = this.changeImage.bind(this)
  }
  changeImage(value) {
    this.setState({image: value})
  }
  render() {
    return (
      <div>
        Add New Listing
        <br />
        <input className='step2Input' placeholder='Image URL' onChange={e => this.changeImage(e.target.value)}/>
        <br />
        <Link to='/wizard/step1'><button>Previous Step</button></Link>
        <Link to='/wizard/step3'><button>Next Step</button></Link>
      </div>
    )
  }
}