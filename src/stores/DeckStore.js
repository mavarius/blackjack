import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let deck = [
  {spades: [1, 11], img: '🂡'},
  {spades: 2, img: '🂢'},
  {spades: 3, img: '🂣'},
  {spades: 4, img: '🂤'},
  {spades: 5, img: '🂥'},
  {spades: 6, img: '🂦'},
  {spades: 7, img: '🂧'},
  {spades: 8, img: '🂨'},
  {spades: 9, img: '🂩'},
  {spades: 10, img: '🂪'},
  {spades: 10, img: '🂫'},
  {spades: 10, img: '🂭'},
  {spades: 10, img: '🂮'},
  {hearts: [1, 11], img: '🂱'},
  {hearts: 2, img: '🂲'},
  {hearts: 3, img: '🂳'},
  {hearts: 4, img: '🂴'},
  {hearts: 5, img: '🂵'},
  {hearts: 6, img: '🂶'},
  {hearts: 7, img: '🂷'},
  {hearts: 8, img: '🂸'},
  {hearts: 9, img: '🂹'},
  {hearts: 10, img: '🂺'},
  {hearts: 10, img: '🂻'},
  {hearts: 10, img: '🂽'},
  {hearts: 10, img: '🂾'},
  {diamonds: [1, 11], img: '🃁'},
  {diamonds: 2, img: '🃂'},
  {diamonds: 3, img: '🃃'},
  {diamonds: 4, img: '🃄'},
  {diamonds: 5, img: '🃅'},
  {diamonds: 6, img: '🃆'},
  {diamonds: 7, img: '🃇'},
  {diamonds: 8, img: '🃈'},
  {diamonds: 9, img: '🃉'},
  {diamonds: 10, img: '🃊'},
  {diamonds: 10, img: '🃋'},
  {diamonds: 10, img: '🃍'},
  {diamonds: 10, img: '🃎'},
  {clubs: [1, 11], img: '	🃑'},
  {clubs: 2, img: '🃒'},
  {clubs: 3, img: '🃓'},
  {clubs: 4, img: '🃔'},
  {clubs: 5, img: '🃕'},
  {clubs: 6, img: '🃖'},
  {clubs: 7, img: '🃗'},
  {clubs: 8, img: '🃘'},
  {clubs: 9, img: '🃙'},
  {clubs: 10, img: '🃚'},
  {clubs: 10, img: '🃛'},
  {clubs: 10, img: '🃝'},
  {clubs: 10, img: '🃞'},

]
let back = {down: null, img: '🂠'},