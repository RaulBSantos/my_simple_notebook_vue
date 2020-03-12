<template>
  <div>
    <b-card>
      <b-row class="text-center">
        <b-col cols="10"
          ><NoteTextContent
            :state="state"
            :header="note.header"
            :text="note.text"
            @edit-text-note="onEditNote"
        /></b-col>
        <b-col cols="2">
          <b-btn-group vertical="true">
            <b-button variant="transparent"
              ><b-icon :icon="editingIcon" @click="changeState"
            /></b-button>
            <b-button variant="transparent"
              ><b-icon
                icon="trash"
                variant="danger"
                @click="emitDelete(note.id)"
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
    note: Object,
    state: String
  },
  methods: {
    emitDelete(id) {
      this.$emit('delete-note', id);
    },
    onEditNote(textValue) {
      this.note.text = textValue;
      this.$emit('update-note', this.note);
    },
    changeState() {
      if (this.state === 'saved') {
        this.state = 'editing';
        this.editingIcon = 'alert-triangle';
      } else {
        this.state = 'saved';
        this.editingIcon = 'pencil';
      }
    }
  },
  data: function() {
    return { editingIcon: 'pencil' };
  }
};
</script>

<style></style>
