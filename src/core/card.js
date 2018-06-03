const defaultCard = {
  question: 'This is question',
  answer: 'This is answer',
  editMode: false,
  newCard: false,
  rank: 0,
}

let nextId = 0

export default function card (data = {}) {
  return {
    id: nextId++,
    ...defaultCard,
    ...data,
  }
}
