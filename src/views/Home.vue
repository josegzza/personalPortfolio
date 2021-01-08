<template>
<div class="wrapper">
  <div class="flex-column">
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
        :wrapper="'h3'"
      ></typical>
    </div> 
  <footer class="footerContainer">
      <p>Copyright © José Gzz</p>  
    </footer>
</div>
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
  color: #eee;
  font-size: 40px;
}

.footerContainer {
    color: #fff;
    text-align: center;
    display: block;
    bottom: 0px;
    right: 0%;
    left: 0%;
    position: absolute;
    visibility: visible;
  }
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');

.wrapper {
  background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80");
  color: #eee;
  width: 100%;
  height: 92.5vh;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  perspective-origin: 50% 50%;
  animation: animation 100s linear infinite;
}

@keyframes animation {
   100%{
    background-position:0px -3000px;
  }
}

  


</style> 