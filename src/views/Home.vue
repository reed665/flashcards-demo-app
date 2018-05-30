<template>
  <div class="home">
    <h2 class="title">Flashcards</h2>
    <!-- <img src="../assets/logo.png"> -->
    <card-list :data="cards" />
  </div>
</template>


<script>
import CardList from '@/components/CardList.vue'

export default {
  components: { CardList },
  computed: {
    cards () {
      return this.$store.state.cards
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
