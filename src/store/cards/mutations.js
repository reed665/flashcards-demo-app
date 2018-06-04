import card from '@/core/card'

const gradeToRank = (grade, prevRank) => {
  switch (grade) {
    case 'bad': return 0
    case 'good': return prevRank + 1
    case 'great': return prevRank + 2
  }
  console.error('gradeToRank: unknown grade')
  return grade
}

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
  },

  grade (state, { cardId, selfGrade }) {
    state.items = state.items.map(item => {
      if (item.id !== cardId) return item
      const rank = gradeToRank(selfGrade, item.rank)
      return { ...item, rank, showAnswer: false }
    })
  },
}
