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
          "School": "Instituto Tecnológico y de Estudios Superiores de Monterrey Campus Monterrey (ITESM)",
          "Bachelor of Science":"Computer Science and Technology Engineering",
          "Expected": "May 2022",
          "Languages":"[ Spanish : NATIVE, English : BULATS B2 ]",
          "GPA" : "3.7/4"
      },
      v2:{
          "June 2022":"Current",
          "Data Analyst Specialist": "Johnson Controls",
          "Location":"Monterrey, Nuevo León, México",
          "Tasks":"Designed ETLs and support Procurement department for data and analytics solutions. Working with Azure cloud (Data Factory, Synapse, Storage), Python, SISS, SQL, Informatica, PowerAutomate & PowerApps.",
          "":"Lead Times: Designed and implemented a pipeline to update Lead Times from supplier ERPs, reducing inaccurate forecasting and revenue gaps. Working with 52 plants and 13 ERPs using ADF, python, and power Automate."
      },
      v3:{
        "name":"José Alberto González Arteaga",
        "from":"Monterrey, Nuevo León, México",
        "email":"jgacontact@gmail.com",
        "phone":"+52 1 8117959540",
      },
      v4:{
        "4 years":"C/C++, Python",
        "3 years":"SQL",
        "2 year":"JavaScript, Java",
        "Technologies":"[ Azure, AWS, SSIS, PowerAutomate, Informatica, PowerBI, Docker, HTML, CSS, Pandas, Git, Github, MongoDB, Linux, Windows ]"
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