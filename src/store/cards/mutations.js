import card from '@/core/card';

export default {
  load(state, cards) {
    state.items = cards;
  },

  remove(state, id) {
    state.items = state.items.filter(item => item.id !== id);
  },

  new(state, cardData) {
    const newCard = card(cardData);
    state.items.unshift(newCard);
  },

  add(state, cardToAdd) {
    state.items.push(cardToAdd);
  },

  update(state, cardToUpdate) {
    state.items = state.items.map((item) => {
      if (item.id !== cardToUpdate.id) return item;
      return { ...item, ...cardToUpdate };
    });
  },
};
