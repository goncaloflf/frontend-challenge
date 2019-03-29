<template>
  <div class="dialog" v-bind:class="{'no-borders': transcriptions.length == 0}">
    <transition-group name="transcriptions-animate" tag="div">
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
    </transition-group>
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
  overflow: hidden;
}
.dialog.no-borders {
  border: none;
}
.outer-dialog-item {
  border-bottom: 1px solid #d1d5db;
  transition: all 0.5s, border-bottom 0s;
}
.outer-dialog-item:last-of-type {
  border-bottom: none;
}

.transcriptions-animate {
  transition: all 0.5s;
}
.transcriptions-animate-enter,
.transcriptions-animate-leave-to {
  opacity: 0;
  transform: translate(-30px);
}
.transcriptions-animate-enter-to {
  opacity: 1;
  max-height: translate(0px);
}
</style>


