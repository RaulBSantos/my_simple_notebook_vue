<template>
  <div>
    <b-card contenteditable :header="readableCreatedTime">
      <b-card-text
        ><b-form-textarea
          :disabled="state !== 'editing'"
          placeholder="Insert your note here..."
          @blur="afterEditText"
          v-model="text"
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
