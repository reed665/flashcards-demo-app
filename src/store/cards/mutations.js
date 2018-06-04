export default {
  load (state, cards) {
    state.items = cards
  },

  remove (state, id) {
    state.items = state.items.filter(item => {
      return item.id !== id
    })
  },
  
  add (state, card) {
    state.items.push(card)
  },

  update (state, card) {
    state.items = state.items.map(item => {
      if (item.id !== card.id) return item
      return { ...item, ...card }
    })
  },
}
