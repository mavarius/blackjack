import React, { Component } from 'react';

export default class Deck extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deck } = this.props;

    return (
      <div>
        {deck.map((card, i) => {
          if (card.suit === 'hearts' || card.suit === 'diamonds') {
            return <span className="playingCard" key={i} style={{color:'red'}}><span>{card.img}</span></span>
          } else {
            return <span className="playingCard" key={i} style={{color:'black'}}><span>{card.img}</span></span>
          }
        })}
        { deck.length > 0 ? <span className="playingCard cardBack" style={{color:'darkslategray'}}><span>🂠</span></span> : <span></span>}
      </div>
    )
  }
}
