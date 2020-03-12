<template>
  <div>
    <b-card contenteditable :header="readableDate">
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
    readableDate() {
      const date = new Date(this.createdDate).toLocaleDateString();
      const time = new Date(this.createdDate).toLocaleTimeString();
      return 'Criada em: ' + date + ' - ' + time;
    }
  },
  methods: {
    afterEditText(element) {
      this.$emit('edit-text-note', element.target.value);
    }
  }
};
</script>
