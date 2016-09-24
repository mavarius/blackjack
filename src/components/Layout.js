import React, { Component } from 'react';
import Table from './Table';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">JACKBLACK</h1>

        <Table/>
      </div>
    )
  }
}
