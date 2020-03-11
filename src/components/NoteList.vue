<template>
  <div>
    <b-container>
      <b-button variant="info" @click="createNewNote"><b-icon-plus /></b-button>
      <NoteElement v-for="note in notes" :note="note" :key="note.id" />
    </b-container>
  </div>
</template>

<script>
import NoteElement from './NoteElement';
export default {
  name: 'NoteList',
  components: {
    NoteElement
  },
  props: {
    notes: Array
  },
  methods: {
    createNewNote() {
      this.notes.push({ title: '', text: '' });
    }
  }
};
</script>

<style></style>
