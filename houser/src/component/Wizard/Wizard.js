import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default class Wizard extends Component {
  render() {
    return (
      <div>
        Wizard
        <Link to="/" className="links"><button>
          Cancel
        </button></Link>
        <Route path='/wizard/step1' component={Step1}/>
        <Route path='/wizard/Step2' component={Step2}/>
        <Route path='/wizard/Step3' component={Step3}/>
      </div>
    );
  }
}
