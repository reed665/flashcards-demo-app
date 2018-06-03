import card from '@/core/card'

export default {
  remove (state, cardId) {
    const idx = state.items.findIndex(card => card.id === cardId)
    state.items.splice(idx, 1)
  },
  
  add (state, cardData) {
    const cardToAdd = card({ ...cardData, editMode: true })
    state.items.unshift(cardToAdd)
  },

  update (state, card) {
    const idx = state.items.findIndex(c => c.id === card.id)
    const updatedCard = {
      ...state.items[idx],
      ...card,
    }
    state.items.splice(idx, 1, updatedCard)
  }
}
