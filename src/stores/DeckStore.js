import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import lodash from 'lodash';

let _dealer = { hand: [], total: 0, message: 'Dealer', hidden: [] };

let _player = { hand: [], total: 0, message: 'Player' };

let _playDeck = [];

let _deck = [
  {suit: 'spades', value: 11, img: '🂡'},
  {suit: 'spades', value: 2, img: '🂢'},
  {suit: 'spades', value: 3, img: '🂣'},
  {suit: 'spades', value: 4, img: '🂤'},
  {suit: 'spades', value: 5, img: '🂥'},
  {suit: 'spades', value: 6, img: '🂦'},
  {suit: 'spades', value: 7, img: '🂧'},
  {suit: 'spades', value: 8, img: '🂨'},
  {suit: 'spades', value: 9, img: '🂩'},
  {suit: 'spades', value: 10, img: '🂪'},
  {suit: 'spades', value: 10, img: '🂫'},
  {suit: 'spades', value: 10, img: '🂭'},
  {suit: 'spades', value: 10, img: '🂮'},
  {suit: 'hearts', value: 11, img: '🂱'},
  {suit: 'hearts', value: 2, img: '🂲'},
  {suit: 'hearts', value: 3, img: '🂳'},
  {suit: 'hearts', value: 4, img: '🂴'},
  {suit: 'hearts', value: 5, img: '🂵'},
  {suit: 'hearts', value: 6, img: '🂶'},
  {suit: 'hearts', value: 7, img: '🂷'},
  {suit: 'hearts', value: 8, img: '🂸'},
  {suit: 'hearts', value: 9, img: '🂹'},
  {suit: 'hearts', value: 10, img: '🂺'},
  {suit: 'hearts', value: 10, img: '🂻'},
  {suit: 'hearts', value: 10, img: '🂽'},
  {suit: 'hearts', value: 10, img: '🂾'},
  {suit: 'diamonds', value: 11, img: '🃁'},
  {suit: 'diamonds', value: 2, img: '🃂'},
  {suit: 'diamonds', value: 3, img: '🃃'},
  {suit: 'diamonds', value: 4, img: '🃄'},
  {suit: 'diamonds', value: 5, img: '🃅'},
  {suit: 'diamonds', value: 6, img: '🃆'},
  {suit: 'diamonds', value: 7, img: '🃇'},
  {suit: 'diamonds', value: 8, img: '🃈'},
  {suit: 'diamonds', value: 9, img: '🃉'},
  {suit: 'diamonds', value: 10, img: '🃊'},
  {suit: 'diamonds', value: 10, img: '🃋'},
  {suit: 'diamonds', value: 10, img: '🃍'},
  {suit: 'diamonds', value: 10, img: '🃎'},
  {suit: 'clubs', value: 11, img: '🃑'},
  {suit: 'clubs', value: 2, img: '🃒'},
  {suit: 'clubs', value: 3, img: '🃓'},
  {suit: 'clubs', value: 4, img: '🃔'},
  {suit: 'clubs', value: 5, img: '🃕'},
  {suit: 'clubs', value: 6, img: '🃖'},
  {suit: 'clubs', value: 7, img: '🃗'},
  {suit: 'clubs', value: 8, img: '🃘'},
  {suit: 'clubs', value: 9, img: '🃙'},
  {suit: 'clubs', value: 10, img: '🃚'},
  {suit: 'clubs', value: 10, img: '🃛'},
  {suit: 'clubs', value: 10, img: '🃝'},
  {suit: 'clubs', value: 10, img: '🃞'}
];

let _faceDown = {down: null, img: '🂠'};

function getTotal(obj) {
  let aces = 0
  let total = obj.hand.reduce((sum, card, i) => {
    card.value === 11 ? aces++ : aces
    return parseInt(sum) + parseInt(card.value)
  }, 0);

  while (total > 21 && aces) {
    total -= 10
    aces--
  };

  return total;
}

class DeckStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      const { type, payload } = action;

      switch (action.type) {
        case 'SHUFFLE_DECK':
          _playDeck = lodash.shuffle(_deck);
          _dealer.hand = [];
          _dealer.hidden = [];
          _player.hand = [];

          _dealer.hidden.push(_playDeck.pop());
          _dealer.hand.push(_playDeck.pop());

          for (var i = 0; i < 2; i++) {
            _player.hand.push(_playDeck.pop());
          }

          _player.total = getTotal(_player);
          _dealer.total = getTotal(_dealer);

          _player.message = `Player: ${_player.total}`;
          _dealer.message = `Dealer: ${_dealer.total}`;

          this.emit('CHANGE');
          break;

        case 'HIT_ME':
          _player.hand.push(_playDeck.pop());
          _player.total = getTotal(_player);

          if (_player.total > 21 ) {
            _player.message = `BUST! ${_player.total}`;
            _dealer.message = `House Wins!`;
          } else {
            _player.message = `Player: ${_player.total}`;
          }

          this.emit('CHANGE');
          break;

        case 'STAND':
          _dealer.hand.push(_dealer.hidden.pop());
          _dealer.total = getTotal(_dealer);
          _dealer.message = `Dealer: ${_dealer.total}`;

          if (_dealer.total > 21) {
            _player.message = `You Win! ${_player.total}`;
            _dealer.message = `BUST! ${_dealer.total}`;
          } else if (_dealer.total === 21) {
            if (_player.total === 21) {
              _player.message = `PUSH ${_player.total}`;
              _dealer.message = `PUSH ${_dealer.total}`;
            } else {
              _dealer.message = `House Wins! ${_dealer.total}`;
            }
          } else if (_dealer.total < 21) {
            if (_dealer.total < 17) {
              _dealer.hand.push(_playDeck.pop());
              _dealer.total = getTotal(_dealer);
              _dealer.message = `Dealer: ${_dealer.total}`;
            }
            if (_dealer.total < _player.total) {
              _player.message = `You Win! ${_player.total}`;
            } else if (_dealer.total > 21) {
              _player.message = `You Win! ${_player.total}`;
              _dealer.message = `BUST! ${_dealer.total}`;
            } else {
              _dealer.message = `House Wins! ${_dealer.total}`;
            }
          }

          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return {
      deck: _playDeck,
      dealer: {
        hand: _dealer.hand,
        total: _dealer.total,
        message: _dealer.message,
        hidden: _dealer.hidden
      },
      player: {
        hand: _player.hand,
        total: _player.total,
        message: _player.message
      }
    };
  }
}

export default new DeckStore();
