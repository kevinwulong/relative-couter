<template>
      <div class="counter">
                  <div class="child" v-on:click="deleteAllName">AC</div>
                  <div class="child" v-on:click="deleteOneName">删除</div>
                  <div class="child" v-on:click="counterHasband">夫</div>
                  <div class="child" v-on:click="counterWife">妻</div>
                  <div class="child" v-on:click="counterDad">父</div>
                  <div class="child" v-on:click="counterMother">母</div>
                  <div class="child" v-on:click="counterBBrother">兄</div>
                  <div class="child" v-on:click="counterSBrother">弟</div>
                  <div class="child" v-on:click="counterBSister">姐</div>
                  <div class="child" v-on:click="counterSSister">妹</div>
                  <div class="child" v-on:click="counterSon">子</div>
                  <div class="child" v-on:click="counterDaughter">女</div>
                  <div class="equal"></div>
                  <div class="equal" v-on:click="result">=</div>
      </div>
</template>

<script>
export default {
  methods: {
    result() {
      this.$emit('resultMeth')
    },
    counterMain() {
      this.$emit('equalNum')
    },
    deleteAllName() {
      this.$emit('deleteAll')
    },
    deleteOneName() {
      this.$emit('deleteOne')
    },
    counterHasband() {
      this.$emit('meth', '老公')
    },
    counterWife() {
      this.$emit('meth', '老婆')
    },
    counterDad() {
      this.$emit('meth', '爸爸')
    },
     counterMother() {
      this.$emit('meth', '妈妈')
    },
    counterBBrother() {
      this.$emit('meth', '哥哥')
    },
    counterSBrother() {
      this.$emit('meth', '弟弟')
    },
    counterBSister() {
      this.$emit('meth', '姐姐')
    },
    counterSSister() {
      this.$emit('meth', '妹妹')
    },
    counterSon() {
      this.$emit('meth', '儿子')
    },
    counterDaughter() {
      this.$emit('meth', '女儿')
    }
  }
}
</script>

<style>

.counter{
  width:100%;
  height: 60%;
  position: absolute;
  top:40%;
  left:0;
  background: #ccc;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  color:rgb(121, 123, 132);
  font-size:70px;
  text-align: center;
  line-height: 245px;
}
.child{
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 25%;
  height: 25%;
  border: 1px solid #ccc;
}
.equal{
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 50%;
  height: 25%;
  border: 1px solid #ccc;
}
</style>
