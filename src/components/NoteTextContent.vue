<template>
  <div>
    <b-card contenteditable :header="header">
      <b-card-text
        ><b-form-textarea
          :disabled="state !== 'editing'"
          placeholder="Insert your note here..."
          @blur="afterEditText"
        >
        </b-form-textarea
      ></b-card-text>
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
    state: {
      type: String,
      required: false
    }
  },
  methods: {
    afterEditText(element) {
      this.$emit('edit-text-note', element.target.value);
    }
  }
};
</script>
