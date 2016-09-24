import React, { Component } from 'react';
import Deck from './Deck';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Jackblack</h1>

        <Deck/>
        dealer
        player
      </div>
    )
  }
}
