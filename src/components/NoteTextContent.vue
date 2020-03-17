<template>
  <div>
    <b-card bg-variant="light">
      <b-card-text>
        {{ readableCreatedTime }}
        <b-iconstack
          v-if="state === 'saved'"
          font-scale="2"
          class="mr-auto p-3"
          shift-v="4"
        >
          <b-icon stacked icon="check" scale="0.5" variant="success"></b-icon>

          <b-icon stacked icon="circle" variant="success"></b-icon>
        </b-iconstack>
        <b-iconstack v-else font-scale="2" shift-v="4" class="mr-auto p-3">
          <b-icon
            stacked
            icon="alert-circle"
            scale="1"
            variant="danger"
          ></b-icon>
        </b-iconstack>
      </b-card-text>
    </b-card>
    <b-card>
      <b-card-text>
        <b-form-textarea
          v-if="state === 'editing'"
          autofocus
          placeholder="Insert your note here..."
          @blur="afterEditText"
          @keyup.ctrl.enter="afterEditText"
          v-model="text"
          max-rows="6"
        ></b-form-textarea>
        <vue-markdown v-else :source="text"></vue-markdown>
      </b-card-text>
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
    },
    isNew: {
      type: Boolean,
      required: false
    }
  },
  mounted() {
    if (this.isNew) {
      this.$emit('before-edit-text-note');
    }
  },
  computed: {
    readableCreatedTime() {
      const createdDateTime = new Date(this.createdDate);
      return (
        'Created: ' +
        createdDateTime.toLocaleDateString() +
        ' - ' +
        createdDateTime.toLocaleTimeString()
      );
    }
  },
  methods: {
    afterEditText(element) {
      this.$emit('after-edit-text-note', element.target.value);
    }
  }
};
</script>
