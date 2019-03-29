<template>
  <div class="dialog" v-bind:class="{'no-borders': transcriptions.length == 0}">
    <div
      class="outer-dialog-item"
      v-bind:key="transcription.id"
      v-for="transcription in transcriptions"
    >
      <DialogItem
        v-bind:transcription="transcription"
        v-on:del-transcription="$emit('del-transcription',transcription.id)"
      />
    </div>
  </div>
</template>

<script>
import DialogItem from "../components/DialogItem";

export default {
  name: "Dialog",
  props: ["transcriptions"],
  components: { DialogItem },
  data() {
    return {};
  }
};
</script>

<style scoped>
.dialog {
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid #d1d5db;
  background-color: #fff;
}
.dialog.no-borders {
  border: none;
}
.outer-dialog-item {
  border-bottom: 1px solid #d1d5db;
}
.outer-dialog-item:last-of-type {
  border-bottom: none;
}
</style>


