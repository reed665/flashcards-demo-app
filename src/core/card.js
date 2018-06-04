const defaultCard = {
  question: 'This is question',
  answer: 'This is answer',
  editMode: false,
  newCard: false,
  showAnswer: false,
  rank: 0,
}

export default function card (data = {}) {
  return {
    ...defaultCard,
    ...data,
  }
}

export const fakeCards = [
  card({
    question: 'What is a pure function?',
    answer: `It is a function that returns a value, based on it's input and causes no side effects`,
  }),
  card({
    question: 'What is partial application?',
    answer: `Providing a function with fewer arguments than it takes, what's returned is a new function that takes the remaining parameters.`,
  }),
  card({
    question: `Why use immutable data structures?`,
    answer: `To start with, it's the simplest type of data, and...`,
  }),
  card({ rank: 10 }),
  card({ rank: 10 }),
  card({ rank: 10 }),
]

export const gradeToRank = (grade, prevRank) => {
  switch (grade) {
    case 'bad': return 0
    case 'good': return prevRank + 1
    case 'great': return prevRank + 2
  }
  console.error('gradeToRank: unknown grade')
  return grade
}
