<template>
  <div>
    <b-card>
      <b-row class="text-center">
        <b-col cols="10"
          ><NoteTextContent
            :state="state"
            :createdDate="note.createdDate"
            :text="note.text"
            @edit-text-note="onEditNote"
        /></b-col>
        <b-col cols="2">
          <b-btn-group vertical="true">
            <b-button variant="transparent">
              <b-iconstack @click="setEditing">
                <b-icon stacked icon="circle-fill" scale="2" variant="info" />
                <b-icon stacked :icon="editingIcon" variant="white" />
              </b-iconstack>
            </b-button>
            <b-button variant="transparent">
              <b-iconstack @click="emitDelete(note.id)">
                <b-icon stacked icon="circle-fill" scale="2" variant="danger" />
                <b-icon stacked icon="trash" variant="white" />
              </b-iconstack>
            </b-button>
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
    state: {
      type: String,
      default: 'saved'
    }
  },
  methods: {
    setEditing() {
      this.state = 'editing';
    },
    emitDelete(id) {
      this.$emit('delete-note', id);
    },
    onEditNote(textValue) {
      this.note.text = textValue;
      this.$emit('update-note', this.note);
      this.state = 'saved';
    }
  },
  data: function() {
    return { editingIcon: 'pencil' };
  }
};
</script>

<style></style>
