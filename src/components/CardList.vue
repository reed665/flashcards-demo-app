<template>
  <div class="card-list">
    <template v-show="haveSomeCards && !loading">
      <template v-if="newCards.length">
        <h3 class="card-list-title">New</h3>
        <div class="card-list-content">
          <div v-for="card of newCards" :key="card.id" class="card-holder">
            <CardItem :data="card" />
          </div>
        </div>
      </template>
      
      <template v-if="masteredCards.length">
        <h3 class="card-list-title">Mastered</h3>
        <div class="card-list-content">
          <div v-for="card of masteredCards" :key="card.id" class="card-holder">
            <CardItem :data="card" />
          </div>
        </div>
      </template>
    </template>

    <p v-show="!haveSomeCards && !loading" class="blue-grey-text no-cards-msg">No cards to show, feel free to add some</p>

    <p v-show="loading" class="loading-msg">Loading...</p>
  </div>
</template>


<script>
import CardItem from '@/components/CardItem'

const rankThreshold = 5

export default {
  components: { CardItem },
  props: ['data', 'loading'],
  computed: {
    haveSomeCards () {
      return !!(this.data && this.data.length)
    },
    orderedByRank () {
      return this.data.slice().sort((prev, next) => prev.rank - next.rank)
    },
    newCards () {
      return this.orderedByRank.filter(card => card.rank <= rankThreshold)
    },
    masteredCards () {
      return this.orderedByRank.filter(card => card.rank > rankThreshold)
    },
  },
}
</script>


<style scoped>
.loading-msg {
  margin: 20px 10px 10px;
  font-size: 1.2em;
}

.no-cards-msg {
  margin: 20px 10px 10px;
  font-size: 1.2em;
}

.card-list-title {
  margin: 10px;
}

.card-list-content {
  column-count: 1;
  column-gap: 0;
}

.card-holder {
  break-inside: avoid-column;
  padding: 10px;
}

@media (min-width: 768px) {
  .card-list-content {
    column-count: 2;
  }
}

@media (min-width: 1280px) {
  .card-list-content {
    column-count: 3;
  }
}
</style>
