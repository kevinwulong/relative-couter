<template>
      <div class="header">
      <p>{{inputName}}</p>
      <p class="result">{{result}}</p>
     </div>
</template>

<script>
export default {
  props:{
    inputName: {
      type: String
    },
    result: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

.header{
  width:100%;
  height: 40%;
  position: absolute;
  top:0;
  left:0;
  background:rgb(241, 243, 242);
  color:rgb(121, 123, 132);
  font-size:80px;
}
.result{
  position: relative;
  top:70%;
  left:0;
}
</style>
