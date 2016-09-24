import React, { Component } from 'react';

export default class Dealer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hand, total } = this.props.dealer;

    return (
      <div className="playerSpot">
        <h2>Dealer Total: {total}</h2>
        <div className="deckWell playerWell">
          {hand.map((card, i) => {
            if (card.suit === 'hearts' || card.suit === 'diamonds') {
              return <span className="playingCard" key={i} style={{color:'red', marginLeft:`${(i*40).toString()}px`}}><span>{card.img}</span></span>
            } else {
              return <span className="playingCard" key={i} style={{color:'black', marginLeft:`${(i*40).toString()}px`}}><span>{card.img}</span></span>
            }
          })}
        </div>
      </div>
    )
  }
}
