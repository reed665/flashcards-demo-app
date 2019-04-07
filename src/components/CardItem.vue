<template>
  <div class="card">
    <div
      v-if="!data.editMode"
      class="card-content"
    >
      <div class="actions">
        <i
          class="material-icons teal-text"
          @click="editModeOn"
        >edit</i>
        <i
          class="material-icons teal-text"
          @click="removeCard"
        >delete</i>
      </div>

      <div class="card-title">
        Question: {{ data.question }}
      </div>
      <p v-if="data.showAnswer">
        Answer: {{ data.answer }}
      </p>
    </div>

    <div
      v-else
      class="card-content"
    >
      <form @submit.prevent="updateCard">
        <label>
          <div>Question</div>
          <textarea
            v-model="question"
            name="question"
            class="materialize-textarea"
            placeholder="Type your question here"
          />
        </label>

        <label>
          <div>Answer</div>
          <textarea
            v-model="answer"
            name="answer"
            class="materialize-textarea"
            placeholder="Type your answer here"
          />
        </label>

        <div class="form-action">
          <button
            type="button"
            class="btn-small btn-flat"
            @click="editModeOff"
          >
            Cancel
          </button>
          <button
            :disabled="!canSubmit"
            type="submit"
            class="btn-small"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <div
      v-if="showCardAction"
      class="card-action"
    >
      <template v-if="data.showAnswer">
        <a
          href="#"
          class="red-text"
          @click="doSelfGrade('bad')"
        >Bad</a>
        <a
          href="#"
          class="blue-text"
          @click="doSelfGrade('good')"
        >Good</a>
        <a
          href="#"
          class="green-text"
          @click="doSelfGrade('great')"
        >Great</a>
      </template>

      <a
        v-else
        href="#"
        @click="showAnswer"
      >Show Answer</a>
    </div>
  </div>
</template>


<script>
import { gradeToRank } from '@/core/card';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      question: '',
      answer: '',
    };
  },
  computed: {
    canSubmit() {
      return this.question && this.answer;
    },
    showCardAction() {
      const { newCard, editMode } = this.data;
      return !newCard && !editMode;
    },
  },
  created() {
    this.resetCardData();
  },
  methods: {
    resetCardData() {
      const { question, answer } = this.data;
      this.question = question;
      this.answer = answer;
    },
    editModeOn() {
      const { id } = this.data;
      this.$store.dispatch('cards/update', { id, editMode: true });
    },
    editModeOff() {
      const { id, newCard } = this.data;
      if (newCard) {
        this.$store.commit('cards/remove', id);
        return;
      }
      this.$store.dispatch('cards/update', { id, editMode: false });
      this.resetCardData();
    },
    showAnswer() {
      const { id } = this.data;
      this.$store.dispatch('cards/update', { id, showAnswer: true });
    },
    doSelfGrade(selfGrade) {
      const { id } = this.data;
      const rank = gradeToRank(selfGrade, this.data.rank);
      this.$store.dispatch('cards/update', { id, rank, showAnswer: false });
    },
    updateCard() {
      if (!this.canSubmit) return;
      const card = {
        ...this.data,
        question: this.question,
        answer: this.answer,
        editMode: false,
        newCard: false,
      };
      if (this.data.newCard) {
        this.$store.dispatch('cards/add', card);
        return;
      }
      this.$store.dispatch('cards/update', card);
    },
    removeCard() {
      this.$store.dispatch('cards/remove', this.data.id);
    },
  },
};
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
