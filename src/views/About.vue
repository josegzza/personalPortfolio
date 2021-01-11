<template>
  <div>
  <br>
  <smtab><class>class</class></smtab> José González <bracket> { </bracket>
    <fun :name="'Constructor'" :values='v3' :type="'constructor'"/> 
    <fun :name="'Education'" :values='v1' />
    <fun :name="'Experience'" :values='v2' />
    <fun :name="'Programming_languages'" :values='v4' />
  <bracket>}</bracket>
  </div>
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
          "School": "Instituto Tecnológico de Monterrey Campus Monterrey (ITESM)",
          "Bachelor of Science":"Computer Science and Technology Engineering",
          "Languages":"[ Spanish : NATIVE, English : BULATS B2 ]",
          "Expected": "May 2022",
          "GPA" : "90/100"
      },
      v2:{
          "October 2020":"December 2020",
          "Data Intern": "Lambda Capital",
          "Location":"Monterrey, Nuevo León, México",
          "Tasks":"Designed and prepared data for financial strategies algorithms.",
          "":"Implemented Azure Devs and visualizations of time series."
      },
      v3:{
        "name":"José Alberto González Arteaga",
        "from":"Monterrey, Nuevo León, México",
        "email":"jgacontact@gmail.com",
        "phone":"+52 1 8117959540",
      },
      v4:{
        "3 years":"C/C++",
        "1 year":"Java, SQL, Python",
        "6 months":"R, JavaScript",
        "Technologies":"[ Azure DevOps, Linux, Pandas, Git, Github, MongoDB, Vue.js, HTML, CSS, Bootstrap, Windows, Microsoft Suite ]"
      }
    }
  }
}

</script>

<style scoped>
  
  div{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #eeff31;
    font-size: 20px;
    background-image: url('../assets/blackground.jpeg');
  }
  tab{
      padding-left:4em;
  }
  smTab{
      padding-left:0.5em;
  }
  class{
      color: #5918df;
  }
  bracket{
      color: white;
      padding-left: 0.5em; 
  }

  
</style>