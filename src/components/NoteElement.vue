<template>
  <div>
    <b-card>
      <b-row class="text-center">
        <b-col cols="10"
          ><NoteTextContent :title="note.title" :text="note.text"
        /></b-col>
        <b-col cols="2">
          <b-btn-group vertical="true">
            <b-button variant="transparent" @click="editNote"
              ><b-icon icon="pencil"
            /></b-button>
            <b-button variant="transparent"
              ><b-icon icon="trash" variant="danger"
            /></b-button>
          </b-btn-group>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import NoteTextContent from './NoteTextContent';
export default {
  name: 'NoteElement',
  components: {
    NoteTextContent
  },
  props: {
    note: Object
  },
  methods: {
    editNote() {}
  }
};
</script>

<style></style>
