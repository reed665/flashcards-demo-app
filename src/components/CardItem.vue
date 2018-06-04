<template>
  <div class="card">
    <div class="card-content" v-if="!data.editMode">
      <div class="actions">
        <i class="material-icons teal-text" @click="editModeOn">edit</i>
        <i class="material-icons teal-text" @click="removeCard">delete</i>
      </div>

      <div class="card-title">Question: {{ data.question }}</div>
      <p v-if="data.showAnswer">Answer: {{ data.answer }}</p>
    </div>

    <div class="card-content" v-else>
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
    </div>

    <div v-if="showCardAction" class="card-action">
      <template v-if="data.showAnswer">
        <a href="#" class="red-text" @click="doSelfGrade('bad')">Bad</a>
        <a href="#" class="blue-text" @click="doSelfGrade('good')">Good</a>
        <a href="#" class="green-text" @click="doSelfGrade('great')">Great</a>
      </template>

      <a v-else href="#" @click="showAnswer">Show Answer</a>
    </div>
  </div>
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
    },
    showCardAction () {
      const { newCard, editMode } = this.data
      return !newCard && !editMode
    },
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
    showAnswer () {
      const { id } = this.data
      this.$store.commit('cards/update', { id, showAnswer: true })
    },
    doSelfGrade (selfGrade) {
      const { id: cardId } = this.data
      this.$store.commit('cards/grade', { cardId, selfGrade })
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
  .card {
    margin: 0;
  }

  .actions {
    opacity: 0;
    transition: opacity .2s ease-out;
    position: absolute;
    right: 0;
    top: 0;
  }
  .actions > i {
    cursor: pointer;
    margin: 2px;
  }

  .card:hover .actions {
    opacity: 1;
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
