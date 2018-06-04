<template>
  <div class="home container">
    <header>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Flashcards</a>
          <button class="btn-floating btn-large halfway-fab" @click="newCard"><i class="material-icons">add</i></button>
        </div>
      </nav>
    </header>

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
    newCard () {
      const cardData = { question: '', answer: '', newCard: true, editMode: true }
      this.$store.dispatch('cards/add', cardData)
    },
  },
  created () {
    this.$store.dispatch('cards/load')
  },
}
</script>


<style scoped>
  header {
    padding: 10px;
  }

  .home {
    margin-top: 20px;
    margin-bottom: 20px;
    background: white;
  }

  nav {
    padding-left: 20px;
    padding-right: 20px;
  }

  header {
    position: relative;
  }

  @media (min-width: 1080px) {
    .home {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
</style>
