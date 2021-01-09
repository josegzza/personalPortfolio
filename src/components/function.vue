<template>
<div>

<div v-if="type == 'function'">
  <br>
  <h2><smTab>{{name}}</smTab> <bracket> ( ) <br>
      <smtab>{</smtab></bracket>
        <br>
        <tab><return>return</return></tab> <bracket>[</bracket> <br><br>
          <div v-for="(val, attr) of values" :key='val.id'>
            <linecode 
            :atribute= attr
            :val= val
            :tabb = tabb />
          </div>
          <smtab><bracket>]</bracket></smtab>
        <br>
      <bracket>}</bracket>
      <br>
  </h2>
</div>
<div v-if="type == 'constructor'">
  <br>
  <h2><return><smtab>{{name}}</smtab></return> <bracket>( ) 
      <br><smtab>{</smtab> </bracket>
        <br>
          <div v-for="(val, attr) of values" :key='val.id'>
            <linecode 
            :atribute= attr
            :val= val
            :tabb = tabb
            :type = type />
          </div>
      <bracket>}</bracket>
  </h2>
</div>

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
      },
      type: {
        type: String,
        default: "function"
      }
  }
}

</script>

<style scoped>


  h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: #eeff31;
    background-color: transparent;
  }
  tab{
      padding-left:4em;
  }
  smTab{
      padding-left:1em;
  }
  return{
      color: #5918df;
  }
  bracket{
      color: white;
      padding-left: 1em; 
  }
  
</style>