<template>
  <header id="header">
    <div class="inner">
      <h1>{{title}}</h1>
      <div class="header-right">
        <UploadSvg v-on:click="$emit('upload-data')"/>
        <FetchDocumentSvg v-on:click="$emit('fetch-data')"/>
      </div>
    </div>
  </header>
</template>

<script>
import UploadSvg from "../assets/upload.svg";
import FetchDocumentSvg from "../assets/fetch-document.svg";

export default {
  name: "Header",
  components: {
    UploadSvg,
    FetchDocumentSvg
  },
  data() {
    return {
      title: "Transcriptions"
    };
  }
};
</script>

<style scoped>
#header {
  height: 70px;
  padding: 0 20px;

  box-shadow: 0 1px 7px -2px #242424;
  position: relative; /* Keeps shadow on top of body */

  display: flex;
  align-items: center;
}

#header .inner {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 960px;
  margin: auto;
  flex-grow: 1;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #414c5e;
}

svg {
  margin-left: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>


