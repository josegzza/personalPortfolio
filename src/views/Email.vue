<template>
<div class = "wrapper">
    <div class="container">
      <h3>Contact Me!</h3>
        <form>
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
</div>
</template>

<style scoped>
* {
    box-sizing: border-box;
  }

.container {
  display: block;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div{
  background-color: transparent;
}

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
  background: url("../assets/blackground.jpeg");
  color: black;
  width: 100%;
  height: 93vh;
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

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_id6ioka', 'template_unl08p9', e.target,
        'user_D0r2hreMWqCTMcZD22abf', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>