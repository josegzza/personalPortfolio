<template>
<div class="wrapper">
    <b-row>
<div class="card-group">
  <div class="card">
    <h2><br>AWS<br><br> </h2>
    <div class="card-body">
      <h5 class="card-title">AWS Cloud Practitioner<br> May 19, 2021</h5>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-dark" onclick="window.open('https://www.credly.com/badges/706f82f8-297a-414c-a4bb-922347b8475d/public_url','mywindow');" style="cursor: pointer;">&nbsp;Certificate</button>
    </div>
  </div>
  <div class="card">
    <h2><br>Data Camp<br><br> </h2>
    <div class="card-body">
      <h5 class="card-title">Data Manipulation Pandas <br> July 2020</h5>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-dark" onclick="window.open('https://drive.google.com/file/d/1LEUXtJYzgzK_vmqLdyxDjHpMtgEG1_XV/view?usp=sharing','mywindow');" style="cursor: pointer;">&nbsp;Certificate</button>
    </div>
  </div>
  <div class="card">
    <h2><br>Data Camp<br><br> </h2>
    <div class="card-body">
      <h5 class="card-title">Intermediate to Python<br> June 2020</h5>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-dark" onclick="window.open('https://drive.google.com/file/d/1iTGPedNoMrBwrn9sU6Pq54vjTVmojGzM/view?usp=sharing','mywindow');" style="cursor: pointer;">&nbsp;Certificate</button>
    </div>
  </div>
  <div class="card">
    <h2><br>Coursera<br><br> </h2>
    <div class="card-body">
      <h5 class="card-title">Introduction to Data Science in Python <br> June 2020</h5>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-dark" onclick="window.open('https://drive.google.com/file/d/13N7XWN7EMrFGvDHGItxDkuB3uxZRMX5f/view?usp=sharing','mywindow');" style="cursor: pointer;">&nbsp;Certificate</button>
    </div>
  </div>
  <div class="card">
    <h2><br>Kaggle<br><br> </h2>
    <div class="card-body">
      <h5 class="card-title">Introduction to Machine Learning <br> November 2020</h5>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-dark" onclick="window.open('https://drive.google.com/file/d/1ixwhUgNqWK0pGombw9D1jspWU_uTC8vX/view?usp=sharing','mywindow');" style="cursor: pointer;">&nbsp;Certificate</button>
    </div>
  </div>
  <div class="card">
    <h2><br>MongoDB<br><br> </h2>
    <div class="card-body">
      <h5 class="card-title">M001: MongoDB: Basics <br> May 2020</h5>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-dark" onclick="window.open('https://drive.google.com/file/d/1t-7WDZqSReqSKaub2B5uEHqp6VRZ2pCI/view?usp=sharing','mywindow');" style="cursor: pointer;">&nbsp;Certificate</button>
    </div>
  </div>
</div>
</b-row>

    </div>
 
</template>

<style scoped>

h2{
    background-color: rgb(40, 45, 55);
    color: #eee;
}

.wrapper {
  background: url("../assets/blackground.jpeg");
  color: black;
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

img {
    float: left;
    width:  500px;
    height: 100px;
    object-fit: cover;
    display: flex;
}
button{
    margin:10px 10px 10px 10px;
}

  
</style>