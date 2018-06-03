<template>
  <li class="card-item">
    <template v-if="!data.editMode">
      <div class="actions">
        <i class="material-icons teal-text" @click="editModeOn">edit</i>
        <i class="material-icons teal-text" @click="removeCard">delete</i>
      </div>

      <p>Question: {{ data.question }}</p>
      <p>Answer: {{ data.answer }}</p>
    </template>

    <template v-else>
      <form @submit.prevent="updateCard">
        <label>
          <div>Question</div>
          <textarea name="question" v-model="question" class="materialize-textarea" placeholder="Type your question here"></textarea>
        </label>

        <label>
          <div>Answer</div>
          <textarea name="answer" v-model="answer" class="materialize-textarea" placeholder="Type your answer here"></textarea>
        </label>

        <div class="form-action">
          <button v-if="!data.newCard" type="button" class="btn-small btn-flat" @click="editModeOff">Cancel</button>
          <button :disabled="!canSubmit" type="submit" class="btn-small">Submit</button>
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
      question: '',
      answer: '',
    }
  },
  created () {
    this.resetCardData()
  },
  computed: {
    canSubmit () {
      return this.question && this.answer
    }
  },
  methods: {
    resetCardData () {
      const { question, answer } = this.data
      this.question = question
      this.answer = answer
    },
    editModeOn () {
      const { id } = this.data
      this.$store.commit('cards/update', { id, editMode: true })
    },
    editModeOff () {
      const { id } = this.data
      this.$store.commit('cards/update', { id, editMode: false })
      this.resetCardData()
    },
    updateCard () {
      if (!this.canSubmit) return
      const card = {
        ...this.data,
        question: this.question,
        answer: this.answer,
        editMode: false,
        newCard: false,
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
    min-width: 250px;
  }

  .actions {
    position: absolute;
    right: 0;
    top: 0;
  }
  .actions > i {
    cursor: pointer;
    margin: 2px;
  }

  .form-action {
    text-align: right;
    margin-top: 5px;
  }
  .form-action button {
    margin-left: 5px;
  }

  textarea {
    min-height: 100px;
  }
</style>
