<template>
  <div class="add-row-holder">
    <AddNewLineSvg v-on:click="$emit('new-line')"/>
  </div>
</template>

<script>
import AddNewLineSvg from "../assets/add-row.svg";

export default {
  name: "AddNewLineButton",
  components: {
    AddNewLineSvg
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
.add-row-holder {
  margin-top: 24px;
}
svg {
  display: block;
  margin: auto;
  cursor: pointer;
  width: 32px;
  height: 32px;
}
</style>
