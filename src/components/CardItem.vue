<template>
  <li class="card-item">
    <button class="btn-remove" @click="removeCard({ idx, card: data })">Remove</button>

    <p>Question: {{ data.question }}</p>
    <p>Answer: {{ data.answer }}</p>
  </li>
</template>


<script>
export default {
  props: ['idx', 'data'],
  methods: {
    removeCard (cardData) {
      this.$store.commit('removeCard', cardData)
    }
  }
}
</script>


<style scoped>
  .card-item {
    padding: 10px;
    margin: 10px;
    border: 1px solid grey;
    position: relative;
  }

  .btn-remove {
    position: absolute;
    right: 0;
    top: 0;
    padding: 2px;
    cursor: pointer;
  }
</style>
