import card from '@/core/card'

export default {
  cards: [
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
    card(),
    card(),
    card(),
  ]
}
