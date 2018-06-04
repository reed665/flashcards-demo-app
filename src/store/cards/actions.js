import db from '@/firebase'
import card from '@/core/card'

const ref = db.collection('cards')

export default {
  load ({ commit }) {
    return ref.get()
      .then(querySnapshot => {
        const cards = []
        querySnapshot.forEach(doc => {
          cards.push({ id: doc.id, ...doc.data() })
        })
        commit('load', cards)
      })
      .catch(err => {
        console.error('Error getting documents', error)
      })
  },

  remove ({ commit }, id) {
    return ref.doc(id).delete()
      .then(() => {
        commit('remove', id)
      })
      .catch(err => {
        console.error('Error deleting document', error)
      })
  },

  add ({ commit }, cardData) {
    const cardToAdd = card(cardData)
    return ref.add(cardToAdd)
      .then(docRef => {
        const id = docRef.id
        commit('add', { id, ...cardToAdd })
      })
      .catch(err => {
        console.error('Error adding document', error)
      })
  },

  update ({ commit }, card) {
    const { id, ...update } = card
    return ref.doc(id).update(update)
      .then(() => {
        commit('update', card)
      })
      .catch(err => {
        console.error('Error updating document', error)
      })
  },
}
