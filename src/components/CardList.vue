<template>
  <ul class="card-list">
    <card-item v-for="(card, idx) of data" :key="idx"
      :data="card"
      @onRemove="$emit('onRemove', { card: $event, idx })"
    />
  </ul>
</template>


<script>
import CardItem from '@/components/CardItem'

export default {
  components: { CardItem },
  props: ['data'],
}
</script>


<style scoped>
.card-list {
  padding: 10px;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
</style>
