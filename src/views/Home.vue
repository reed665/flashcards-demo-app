<template>
  <div class="home">
    <h2 class="title">Flashcards</h2>
    <!-- <img src="../assets/logo.png"> -->
    <card-list :data="cards" />
  </div>
</template>


<script>
import CardList from '@/components/CardList.vue'
import card from '@/core/card'

const cards = [
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

export default {
  components: { CardList },
  data () {
    return {
      cards,
    }
  }
}
</script>


<style scoped>
  .home {
    width: 100%;
    background: white;
  }

  .title {
    margin: 0;
    padding: 20px;
    border-bottom: 1px solid black;
  }

  @media (min-width: 1080px) {
    .home {
      margin: 50px auto;
      max-width: 960px;
    }
  }
</style>
