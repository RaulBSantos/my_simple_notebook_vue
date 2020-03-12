<template>
  <div id="app">
    <NoteList :notes="notes" />
  </div>
</template>

<script>
import NoteList from './components/NoteList';

export default {
  name: 'App',
  components: {
    NoteList
  },
  data() {
    return { notes: [] };
  },
  mounted() {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'));
      } catch (e) {
        localStorage.removeItem('notes');
      }
    }
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
