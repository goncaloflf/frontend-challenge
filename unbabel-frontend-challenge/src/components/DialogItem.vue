<template>
  <div class="dialog-item">
    <div class="left-dialog">
      <Checkbox/>
      <PersonIconSvg/>
      <div class="text">
        <h3
          v-on:blur="$emit('change-voice',{voice: $event.currentTarget.innerHTML, id: transcription.id})"
          contenteditable="true"
        >{{transcription.voice}}</h3>
        <p
          v-on:blur="$emit('change-text',{text: $event.currentTarget.innerHTML, id: transcription.id})"
          contenteditable="true"
        >{{transcription.text}}</p>
      </div>
    </div>
    <div class="right-dialog" v-on:click="$emit('del-transcription',transcription.id)">
      <DeleteSvg/>
    </div>
  </div>
</template>

<script>
import Checkbox from "../components/Checkbox";
import PersonIconSvg from "../assets/person.svg";
import DeleteSvg from "../assets/delete.svg";

export default {
  name: "DialogItem",
  props: ["transcription"],
  components: { Checkbox, PersonIconSvg, DeleteSvg },
  data() {
    return {};
  },
  methods: {
    hello() {
      alert("hello");
    }
  }
};
</script>

<style scoped>
svg {
  width: 26px;
  height: 26px;
  flex-shrink: 0;
}
.dialog-item {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.left-dialog {
  display: flex;
}
.left-dialog svg {
  margin: 0 10px;
}
.right-dialog {
  visibility: hidden;
}
.dialog-item:hover .right-dialog {
  visibility: visible;
  cursor: pointer;
}
.right-dialog svg {
  width: 16px;
  height: 20px;
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #566074;
  margin-bottom: 10px;
}
p {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #414c5e;
}
</style>


