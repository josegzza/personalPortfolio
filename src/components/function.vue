<template>
<div>
  <h2><smTab>{{name}}</smTab> ( )
      <bracket>{</bracket>
        <br><br>
        <tab><return>return</return></tab> <bracket>[</bracket> <br><br>
          <div v-for="(val, attr) of values" :key='val.id'>
            <linecode 
            :atribute= attr
            :val= val
            :tabb = tabb />
          </div>
          <tab><bracket>]</bracket></tab>
        <br>
      <bracket>}</bracket>
      <br>
  </h2>
</div>
</template>

<script>

import linecode from '../components/linecode.vue';

export default {
  components: {
      linecode
  },
  props: {
      name : {
          type: String,
          requiere: true
      },
      attr: {
          type: Array,
          requiere: false
      },
      values: {
          type: Object,
          requiere: true
      },
      tabb: {
          type: Boolean,
          requiere: false
      }
  }
}

</script>

<style scoped>


  h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: #eeff31;
  }
  tab{
      padding-left:2em;
  }
  smTab{
      padding-left:0.5em;
  }
  return{
      color: #5918df;
  }
  bracket{
      color: white;
      padding-left: 0.5em; 
  }
  
</style>