<template>
  <div class="card-list">
    <ul v-show="haveSomeCards" class="list">
      <CardItem v-for="card of data" :key="card.id" :data="card" />
    </ul>

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
    }
  },
}
</script>


<style scoped>
.list {
  padding: 10px;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.no-cards-msg {
  margin: 10px;
  padding: 10px;
}
</style>
