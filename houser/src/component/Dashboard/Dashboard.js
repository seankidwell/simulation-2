import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      listOfHouses: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.removeHouse = this.removeHouse.bind(this);
  }
  componentDidMount() {
    axios.get('/houses').then(res => {
      this.setState({listOfHouses: res.data})
    })
  }
  removeHouse(id) {
    axios.delete(`/houses/${id}`).then(res => {
      this.componentDidMount();
    })
  }
  render() {
    let list = this.state.listOfHouses.map((e,i) => {
      return <House key={i} id={this.state.listOfHouses[i].id} houseInfo={this.state.listOfHouses[i]} removeHouse={this.removeHouse}/>
    })
    return (
      <div>
        Dashboard
        <Link to='/wizard/step1' className='links'><button>Add to Property</button></Link>
        {list}
      </div>
    )
  }
}