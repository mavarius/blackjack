import AppDispatcher from '../AppDispatcher';

const DeckActions = {
  shuffle() {
    AppDispatcher.dispatch({
      type: 'SHUFFLE_DECK'
    })
  },

  hitMe() {
    AppDispatcher.dispatch({
      type: 'HIT_ME'
    })
  },

  stand() {
    AppDispatcher.dispatch({
      type: 'STAND'
    })
  }
}

export default DeckActions;
