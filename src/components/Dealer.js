import React, { Component } from 'react';

export default class Dealer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hand, total, hidden, message } = this.props.dealer;

    return (
      <div className="playerSpot">
        <h2>{message}</h2>
        <div className="deckWell playerWell">
          { hidden.length > 0 ? <span className="playingCard cardBack" style={{color:'darkslategray'}}><span>🂠</span></span> : <span></span>}

          {hand.map((card, i) => {
            if (card.suit === 'hearts' || card.suit === 'diamonds') {
              return <span className="playingCard" key={i} style={{color:'red', marginLeft:`${(i*50)+50}px`}}><span>{card.img}</span></span>
            } else {
              return <span className="playingCard" key={i} style={{color:'black', marginLeft:`${(i*50)+50}px`}}><span>{card.img}</span></span>
            }
          })}
        </div>
      </div>
    )
  }
}
