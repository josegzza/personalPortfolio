<template>

  <body>
    <br>
    <fun :name="'Education'" :values='v1' :tabb="'1'"/>
    <fun :name="'Experience'" :values='v2' :tabb="'1'"/>
  </body>

</template>

<script>

import comment from "../components/comment.vue"
import fun from "../components/function.vue"

export default {
  components: {
    comment, fun
  },
  data() {
    return {
      v1:{
          "School": "Instituto Tecnologico de Monterrey campus Monterrey (ITESM)",
          "Bachelor of Science":"Computer Science and Technology Engineering",
          "Expected": "May 2022",
          "GPA" : "90/100"
      },
      v2:{
          "October 2020":"December 2020",
          "Data Intern": "Lambda Capital",
          "Location":"Monterrey, Nuevo Leon, Mexico",
          "Tasks":"Designed and prepared data for financial strategies algorithms.",
          "":"Implemented Azure Devs and visualizations of time series."
      }
    }
  }
}

</script>

<style>
  body{
    background-color: #222;
  }
</style>