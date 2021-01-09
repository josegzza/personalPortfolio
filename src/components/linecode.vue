<template>
<div>

    <div v-if="type == 'function'">
    <h2 v-if="atribute"><tab>{{atribute}} : {{val}} </tab></h2>
    <h2 v-if="!atribute"> <tab> {{val}} </tab></h2>
    </div>
    <div v-if="type == 'constructor'">
    <h2 v-if="atribute"><tab><this>this . </this>{{atribute}} = <val> " {{val}} "</val></tab></h2>
</div>
</div>
</template>

<script>

module.exports = {
  props: {
      atribute : {
          type: String,
          requiere: false,
      },
      val: {
          type: String,
          requiere: true
      },
      tabb:{
          type: Boolean,
          requiere: false
      },
      type:{
          type: String,
          default: "function",
          requiere: false
      }
  }
}
</script>

<style scoped>
  h2 {
    font-size: 20px;
    color: #24e33a;
    background-color: transparent;
  }
  this {
      font-size: 20px;
      color: tomato;
  }
  tab{
      padding-left:8em;
  }
  smTab{
      padding-left:1em;
  }
  val{
      color: #e39d24;
  }
  
</style>