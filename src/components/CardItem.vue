<template>
  <li class="card-item">
    <p>Question: {{ data.question }}</p>
    <p>Answer: {{ data.answer }}</p>
  </li>
</template>


<script>
export default {
  props: ['data'],
}
</script>


<style scoped>
  .card-item {
    padding: 10px;
    margin: 10px;
    border: 1px solid grey;
  }
</style>
