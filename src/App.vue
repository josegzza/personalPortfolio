<template>
  <div id="app">
        <div>
      <b-navbar class="navbar navbar-dark" style="background-color: #282D37">
        <b-navbar-nav>
          <b-navbar-brand>José González</b-navbar-brand>
          <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
          <b-nav-item :to="{name: 'About'}">About</b-nav-item>
          <b-nav-item :to="{name: 'Projects'}">Projects</b-nav-item>
          <b-nav-item :to="{name: 'Certificates'}">Certificates</b-nav-item>
          
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Contact" right>
            <!-- <b-dropdown-item :to="{name: 'Email'}">Email</b-dropdown-item> -->
            <b-dropdown-item href="https://www.linkedin.com/in/pepegzza/" target="_blank">Linkedin</b-dropdown-item>
            <b-dropdown-item href="https://github.com/josegzza" target="_blank">Github</b-dropdown-item>
            <b-dropdown-item href="https://www.kaggle.com/josegzza" target="_blank">Kaggle</b-dropdown-item>
          </b-nav-item-dropdown>
        
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>
