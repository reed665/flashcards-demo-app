import card from '@/core/card'

export default {
  removeCard (state, cardId) {
    const idx = state.cards.findIndex(card => card.id === cardId)
    state.cards.splice(idx, 1)
  },
  
  addCard (state, cardData) {
    const cardToAdd = card(cardData)
    state.cards.unshift(cardToAdd)
  },

  updateCard (state, card) {
    const idx = state.cards.findIndex(c => c.id === card.id)
    const updatedCard = {
      ...state.cards[idx],
      ...card,
    }
    state.cards.splice(idx, 1, updatedCard)
  }
}
