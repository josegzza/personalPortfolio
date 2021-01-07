<template>
<div>
    <div v-if="tabb">
    <h2 v-if="atribute"><tab>{{atribute}} : {{val}} </tab></h2>
    <h2 v-if="!atribute"> <tab> {{val}} </tab></h2>
    </div>
    <div v-if="!tabb">
    <h2 v-if="atribute">{{atribute}} : {{val}}</h2>
    <h2 v-if="!atribute"> {{val}}</h2>
    </div>
</div>
</template>

<script>

module.exports = {
  props: {
      name : {
          type: String,
          requiere: true,
      },
      val: {
          type: String,
          requiere: true
      },
      tabb:{
          type: Boolean,
          requiere: false
      }
  }
}
</script>

<style>
  h2 {
    font-size: 20px;
    color: #24e33a;
  }
  tab{
      padding-left:4em;
  }
  smTab{
      padding-left:0.5em;
  }
  
</style>