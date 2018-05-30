const defaultCard = {
  question: 'This is question',
  answer: 'This is answer',
  rank: 0,
}

export default function card (data = {}) {
  return {
    ...defaultCard,
    ...data,
  }
}
