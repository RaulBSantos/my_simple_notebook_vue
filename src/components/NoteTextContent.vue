<template>
  <div>
    <b-card contenteditable :header="readableCreatedTime">
      <b-card-text>
        <b-form-textarea
          v-if="state === 'editing'"
          markdown-edit
          placeholder="Insert your note here..."
          @blur="afterEditText"
          v-model="text"
        >
        </b-form-textarea>
        <pre v-else v-html="markedDownText"></pre>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
const marked = require('marked');

export default {
  name: 'NoteTextContent',
  props: {
    createdDate: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    }
  },
  computed: {
    markedDownText() {
      return marked(this.text, { sanitize: true });
    },
    readableCreatedTime() {
      const createdDateTime = new Date(this.createdDate);
      return (
        'Criada em: ' +
        createdDateTime.toLocaleDateString() +
        ' - ' +
        createdDateTime.toLocaleTimeString()
      );
    }
  },
  methods: {
    afterEditText(element) {
      this.$emit('edit-text-note', element.target.value);
    }
  }
};
</script>
