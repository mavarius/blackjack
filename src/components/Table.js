import React, { Component } from 'react';

import DeckStore from '../stores/DeckStore';

import DeckActions from '../actions/DeckActions';

import Deck from './Deck';
import Player from './Player';
import Dealer from './Dealer';

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
    const { deck, player, dealer } = this.state;

    return (
      <div className="playingTable">

        <div className="row">
          <Deck deck={deck}/>
        </div>
        <div className="row">
          <Dealer dealer={dealer}/>
          <Player player={player}/>
        </div>
        <div className="row buttons">
          <button onClick={this._newGame} className="btn btn-success">NEW GAME</button>
          { player.total > 0 && player.total <= 21 ? <button onClick={this._hitMe} className="btn btn-danger">HIT ME</button> : <button onClick={this._hitMe} className="btn btn-danger" disabled>HIT ME</button> }
          { player.total > 0 && player.total <= 21 ? <button className="btn btn-primary">STAND</button> : <button className="btn btn-primary" disabled>STAND</button> }
        </div>
      </div>
    )
  }
}
