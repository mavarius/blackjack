import AppDispatcher from '../AppDispatcher';

const DeckActions = {
  shuffle(deck) {
    AppDispatcher.dispatch({
      type: 'SHUFFLE_DECK'
    })
  }
}

export default DeckActions;
