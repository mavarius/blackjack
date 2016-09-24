import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import lodash from 'lodash';

let _dealerHand = [];

let _playerHand = [];

let _discards = [];

let _deck = [
  {suit: 'spades', value: [1, 11], img: '🂡'},
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
  {suit: 'hearts', value: [1, 11], img: '🂱'},
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
  {suit: 'diamonds', value: [1, 11], img: '🃁'},
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
  {suit: 'clubs', value: [1, 11], img: '🃑'},
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

class DeckStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'SHUFFLE_DECK':
          _deck = lodash.shuffle(_deck);
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
    return _deck;
  }
}

export default new DeckStore();
