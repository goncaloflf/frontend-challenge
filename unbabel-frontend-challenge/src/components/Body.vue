<template>
  <div id="body">
    <Dialog v-bind:transcriptions="transcriptions" v-on:del-transcription="deleteTranscription"/>
    <AddNewLineButton v-on:new-line="$emit('new-line')"/>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";
import AddNewLineButton from "../components/AddNewLineButton";

export default {
  name: "Body",
  props: ["transcriptions"],
  components: { Dialog, AddNewLineButton },
  data() {
    return {};
  },
  methods: {
    deleteTranscription(id) {
      this.$emit("del-transcription", id);
    }
  }
};
</script>

<style scoped>
#body {
  background-color: #f6f7f8;
  height: calc(100vh - 70px);

  padding: 24px;
}
</style>


