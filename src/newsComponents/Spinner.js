import React, { Component } from 'react';
import loader from '../assets/image/Spinner-1s-238px.gif';
class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loader} alt="" />
      </div>
    );
  }
}

export default Spinner;
