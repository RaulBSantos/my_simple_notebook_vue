<template>
  <div>
    <b-card :header="title">
      <b-card-text>{{ text }}</b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'NoteTextContent',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    }
  }
};
</script>
