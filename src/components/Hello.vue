<template>
  <div class="Hello">
        <z-header :inputName="inputName" :result="resultVal"></z-header>
        <z-counter @meth="counter1" @deleteAll="deleteAll" @deleteOne="deleteOne" :inputName="inputName"  @resultMeth="resultMeth">
        </z-counter>
  </div>
</template>

<script>
import header from './header'
import counter from './counter'
import Index from './index'
export default {
  data() {
    return {
      inputName: '',
      resultVal: ''
    }
  },
  components: {
    'z-header': header,
    'z-counter': counter
  },
  methods: {
    resultMeth() {
      this.resultMeth2()
      console.log(resultVal)
    },
    resultMeth2() {
      let index = this.inputName
      return Index(index)
    },
    counter1(name) {
      if (this.inputName.length) {
        this.inputName=this.inputName+ '的'+name
      }
      else {
        this.inputName=name
      }
    },
    deleteAll() {
        this.inputName=''
    },
    deleteOne() {
        this.inputName= this.inputName.slice(0, -3)
    }
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  font-family: "微软雅黑";
  
}
.Hello{
  height: 100%;
  width:100%;
  position: absolute;
  top:0;
  bottom:0;
  overflow: hidden;
}

</style>
