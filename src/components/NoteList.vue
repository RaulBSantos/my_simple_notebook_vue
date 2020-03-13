<template>
  <div>
    <b-container>
      <b-iconstack scale="4" @click="createNewNote">
        <b-icon stacked icon="circle-fill" variant="info"></b-icon>
        <b-icon stacked icon="plus" variant="white"></b-icon>
      </b-iconstack>
      <br />
      <br />
      <hr />
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
    saveNotes() {
      const parsedNotes = JSON.stringify(this.notes);
      localStorage.setItem('notes', parsedNotes);
    },
    createNewNote() {
      const createdDate = new Date().toISOString();
      this.notes.unshift({
        createdDate: createdDate,
        text: ''
      });
      this.saveNotes();
    },
    deleteNote(createdDate) {
      const idx = this.notes.findIndex(el => el.createdDate === createdDate);
      this.notes.splice(idx, 1);
      this.saveNotes();
    },
    updateNote(note) {
      const idx = this.notes.findIndex(
        el => el.createdDate === note.createdDate
      );
      this.notes[idx] = note;
      this.saveNotes();
    }
  }
};
</script>

<style></style>
