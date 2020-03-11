<template>
  <div>
    <b-card contenteditable :header="header">
      <b-card-text contenteditable>{{ text }}</b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'NoteTextContent',
  props: {
    header: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    }
  }
};
</script>
