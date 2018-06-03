<template>
  <li class="card-item">
    <template v-if="!editMode">
      <div class="actions">
        <button class="btn" @click="editModeOn">Edit</button>
        <button class="btn" @click="removeCard">Remove</button>
      </div>

      <p>Question: {{ data.question }}</p>
      <p>Answer: {{ data.answer }}</p>
    </template>

    <template v-else>
      <form @submit.prevent="updateCard">
        <label>
          <div>Question</div>
          <textarea name="question" v-model="question" cols="30" rows="10" placeholder="Type your question here"></textarea>
        </label>

        <label>
          <div>Answer</div>
          <textarea name="answer" v-model="answer" cols="30" rows="10" placeholder="Type your answer here"></textarea>
        </label>

        <div class="form-action">
          <button type="button" class="btn" @click="editModeOff">Cancel</button>
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </template>
  </li>
</template>


<script>
export default {
  props: ['data'],
  data () {
    return {
      editMode: false,
      question: '',
      answer: '',
    }
  },
  created () {
    this.resetCardData()
  },
  methods: {
    resetCardData () {
      const { question, answer } = this.data
      this.question = question
      this.answer = answer
    },
    editModeOn () {
      this.editMode = true
    },
    editModeOff () {
      this.editMode = false
      this.resetCardData()
    },
    updateCard () {
      this.editMode = false
      const card = {
        ...this.data,
        question: this.question,
        answer: this.answer,
      }
      this.$store.commit('cards/update', card)
    },
    removeCard () {
      this.$store.commit('cards/remove', this.data.id)
    },
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

  .actions {
    position: absolute;
    right: 0;
    top: 0;
  }

  .btn {
    padding: 2px;
    cursor: pointer;
  }

  .form-action {
    text-align: right;
    margin-top: 5px;
  }

  form label {
    display: block;
  }
</style>
