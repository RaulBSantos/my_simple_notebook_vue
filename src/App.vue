<template>
  <div id="app">
    <NoteList :notes="notes" />
  </div>
</template>

<script>
import NoteList from './components/NoteList';

const notes = [
  { id: 1, title: 'Titulo 1', text: 'Texto 1' },
  { id: 2, title: 'Título 2', text: 'Texto 2' }
];

export default {
  name: 'App',
  components: {
    NoteList
  },
  data: function() {
    return { notes: notes };
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
