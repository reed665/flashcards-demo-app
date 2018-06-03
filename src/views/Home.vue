<template>
  <div class="home">
    <h2 class="title">Flashcards</h2>
    <!-- <img src="../assets/logo.png"> -->
    <button class="btn-add" @click="addCard">Add Flashcard</button>
    <CardList :data="cards" />
  </div>
</template>


<script>
import CardList from '@/components/CardList.vue'

export default {
  components: { CardList },
  computed: {
    cards () {
      return this.$store.state.cards.items
    }
  },
  methods: {
    addCard () {
      this.$store.commit('cards/add', { question: '', answer: '', newCard: true })
    }
  },
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

  .btn-add {
    padding: 4px;
    margin: 10px 20px;
  }

  @media (min-width: 1080px) {
    .home {
      margin: 50px auto;
      max-width: 960px;
    }
  }
</style>
