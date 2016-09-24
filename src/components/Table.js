import React, { Component } from 'react';

import DeckStore from '../stores/DeckStore';

import DeckActions from '../actions/DeckActions';

import Deck from './Deck';
import Player from './Player';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this._newGame = this._newGame.bind(this);
    this._hitMe = this._hitMe.bind(this);
    this._onChange = this._onChange.bind(this);

    this.state = DeckStore.getAll();
  }

  componentWillMount() {
    DeckStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    DeckStore.stopListening(this._onChange)
  }

  _newGame() {
    DeckActions.shuffle();
  }

  _hitMe() {
    DeckActions.hitMe();
  }

  _onChange() {
    this.setState( DeckStore.getAll() )
  }

  render() {
    const { deck, playerHand, dealerHand } = this.state;

    return (
      <div className="playingTable">
        <button onClick={this._newGame} className="btn btn-success">New Game</button>
        <button onClick={this._hitMe} className="btn btn-warning">HIT ME</button>
        <div className="deckWell">
          <Deck deck={deck}/>
        </div>
        <div className="deckWell">
          <Player playerHand={playerHand}/>
        </div>
      </div>
    )
  }
}
