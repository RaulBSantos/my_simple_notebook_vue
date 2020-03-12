<template>
  <div>
    <b-container>
      <b-button variant="info" @click="createNewNote"><b-icon-plus /></b-button>
      <NoteElement
        v-for="note in notes"
        :note="note"
        :key="note.id"
        @delete-note="deleteNote"
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
      this.notes.unshift({ header: 'Title', text: '' });
    },
    deleteNote(id) {
      const idx = this.notes.findIndex(el => el.id === id);
      this.notes.splice(idx, 1);
    }
  }
};
</script>

<style></style>
