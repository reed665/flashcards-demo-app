export default {
  removeCard (state, { idx, card }) {
    state.cards = state.cards.filter((card, index) => index !== idx)
  }
}
