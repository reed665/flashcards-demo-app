<template>
  <div class="card-list">
    <div v-show="haveSomeCards" class="card-list-content">
      <div v-for="card of orderedByRank" :key="card.id" class="card-holder">
        <CardItem :data="card" />
      </div>
    </div>

    <p v-show="!haveSomeCards" class="no-cards-msg">No cards to show, feel free to add some</p>
  </div>
</template>


<script>
import CardItem from '@/components/CardItem'

export default {
  components: { CardItem },
  props: ['data'],
  computed: {
    haveSomeCards () {
      return !!(this.data && this.data.length)
    },
    orderedByRank () {
      return this.data.slice().sort((prev, next) => prev.rank - next.rank)
    },
  },
}
</script>


<style scoped>
.no-cards-msg {
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
