<template>
  <div id="app">
    <Header v-on:upload-data="uploadData" v-on:fetch-data="fetchData"/>
    <Body
      v-bind:transcriptions="transcriptions"
      v-on:del-transcription="deleteTranscription"
      v-on:new-line="newLine"
      v-on:change-voice="changeVoice"
      v-on:change-text="changeText"
    />
  </div>
</template>

<script>
/* Axios has better backwards compatibility than Fetch API */
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body";

const API_URL = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

export default {
  name: "app",
  components: {
    Header,
    Body
  },
  data() {
    return {
      transcriptions: []
    };
  },
  methods: {
    deleteTranscription(id) {
      this.transcriptions = this.transcriptions.filter(
        transcription => transcription.id != id
      );
    },
    newLine() {
      /* Assumed the id for the new line is the current biggest id + 1. If there are no lines, the id is 1.*/
      let newId =
        this.transcriptions.length == 0
          ? 1
          : Math.max.apply(Math, this.transcriptions.map(o => o.id)) + 1;
      this.transcriptions.push({
        id: newId,
        voice: "What is my voice?",
        text: "What is my text?"
      });
    },
    fetchData() {
      axios
        .get(API_URL)
        .then(res => (this.transcriptions = res.data))
        .catch(err => alert(err));
    },
    uploadData() {
      axios
        .post(API_URL, this.transcriptions)
        .then(alert("Upload successful!"))
        .catch(err => alert(err));
    },
    changeVoice(p) {
      this.transcriptions.find(x => x.id == p.id).voice = p.voice;
    },
    changeText(p) {
      this.transcriptions.find(x => x.id == p.id).text = p.text;
    }
  }
};
</script>

<style lang="scss">
@import url("../static/reset.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:500,600|Open+Sans");
</style>


<style>
</style>
