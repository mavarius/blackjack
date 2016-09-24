import React, { Component } from 'react';

import DeckStore from '../stores/DeckStore';

import DeckActions from '../actions/DeckActions';

import Deck from './Deck';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this._newGame = this._newGame.bind(this);
    this._onChange = this._onChange.bind(this);

    this.state = {
      deck: DeckStore.getAll()
    }
  }

  componentWillMount() {
    DeckStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    DeckStore.stopListening(this._onChange)
  }

  _newGame() {
    const { deck } = this.state;
    DeckActions.shuffle(deck);
  }

  _onChange() {
    this.setState({
      deck: DeckStore.getAll()
    })
  }

  render() {
    const { deck } = this.state;

    return (
      <div className="playingTable">
        <button onClick={this._newGame} className="btn btn-success">New Game</button>

        <div className="deckWell">
          <Deck deck={deck}/>
        </div>
      </div>
    )
  }
}
