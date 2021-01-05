<template>
<body>
  <div class="header">
  <div id="app" class="w-screen h-screen bg-gray-800 flex flex-col justify-center ">
  
    <div class="container m-auto bg-gray-900 text-center text-white shadow-2xl h-64 flex flex-col justify-center rounded-lg text-3xl">
      <typical
        class="vt-title"
        :steps="['Hi, I am José González! :-) 👋', 500]"
        :wrapper="'h1'"
      ></typical>
      <typical
        class="vt-subTitle"
        :steps="['I am', 1000, 
                  'I am Data Science Enthusiast. ⛏', 1000, 
                  'I am Computer Science Student. 🖥', 1000,
                  'I am self-Learner. 📚', 1000,
                  'I am Proud music geek. 🎵', 1000,
                  'I am Coffee adict. 🍵', 1000]"
        :loop='Infinity'
        :wrapper="'h2'"
      ></typical>
    </div>
  </div>
  </div>

  <footer class="footerContainer">
      <p>Copyright © José Gzz</p>  
    </footer>
</body>  
</template>
 
<script>
import typical from 'vue-typical'
 
export default {
  name: 'app',
  data: function() {
    return {
      msg: 'vue typical'
    }
  },
  components: {
    typical
  }
}
</script> 
 
<style>
.vt-title{
  color: #42b983;
  font-size: 60px;
}

.vt-subTitle{
  font-size: 40px;
}

.header {
      text-align: center;
      background: #222;
      padding-top: 250px;
      padding-bottom: 250px;
  }


.footerContainer {
    color: #fff;
    background: #222;
    text-align: center;
    display: block;
    bottom: 0px;
    right: 0%;
    left: 0%;
    position: absolute;
    visibility: visible;
  }


  


</style> 