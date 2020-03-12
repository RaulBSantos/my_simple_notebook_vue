<template>
  <div id="app">
    <NoteList :notes="notes" />
  </div>
</template>

<script>
import NoteList from './components/NoteList';

const notes = [
  { id: 1, header: 'Titulo 1', text: 'Texto 1' },
  { id: 2, header: 'Título 2', text: 'Texto 2' }
];

export default {
  name: 'App',
  components: {
    NoteList
  },
  data() {
    return { notes: [] };
  },
  created() {
    this.notes = notes;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
