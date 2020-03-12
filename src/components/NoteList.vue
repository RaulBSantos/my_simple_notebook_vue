<template>
  <div>
    <b-container>
      <b-button variant="info" @click="createNewNote"><b-icon-plus /></b-button>
      <NoteElement
        v-for="note in notes"
        :note="note"
        :key="note.id"
        @delete-note="deleteNote"
        @update-note="updateNote"
      />
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
      const createdDate = new Date().toISOString();
      this.notes.unshift({
        createdDate: createdDate,
        header: 'Title',
        text: ''
      });
    },
    deleteNote(createdDate) {
      const idx = this.notes.findIndex(el => el.createdDate === createdDate);
      this.notes.splice(idx, 1);
    },
    updateNote(note) {
      const idx = this.notes.findIndex(
        el => el.createdDate === note.createdDate
      );
      this.notes[idx] = note;
    }
  }
};
</script>

<style></style>
