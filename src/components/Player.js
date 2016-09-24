import React, { Component } from 'react';

export default class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { playerHand } = this.props;

    return (
      <div>
        {playerHand.map((card, i) => {
          if (card.suit === 'hearts' || card.suit === 'diamonds') {
            return <span className="playingCard" key={i} style={{color:'red'}}><span>{card.img}</span></span>
          } else {
            return <span className="playingCard" key={i} style={{color:'black'}}><span>{card.img}</span></span>
          }
        })}
      </div>
    )
  }
}
