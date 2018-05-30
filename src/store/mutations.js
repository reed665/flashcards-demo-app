import card from '@/core/card'

export default {
  removeCard (state, { idx, card }) {
    state.cards = state.cards.filter((card, index) => index !== idx)
  },

  addCard (state, cardData) {
    const cardToAdd = card(cardData)
    state.cards.unshift(cardToAdd)
  }
}
