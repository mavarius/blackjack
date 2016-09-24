import AppDispatcher from '../AppDispatcher';

const DeckActions = {
  shuffle(deck) {
    AppDispatcher.dispatch({
      type: 'SHUFFLE_DECK'
    })
  },
  
  hitMe(deck) {
    AppDispatcher.dispatch({
      type: 'HIT_ME',
    })
  }
}

export default DeckActions;
