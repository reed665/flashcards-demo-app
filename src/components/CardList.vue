<template>
  <div class="card-list">
    <div v-show="haveSomeCards" class="row">
      <CardItem v-for="card of orderedByRank" :key="card.id" :data="card" />
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
  padding: 10px;
}
</style>
