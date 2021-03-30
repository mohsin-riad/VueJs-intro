<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/employee">Employee List</b-nav-item>
          <b-nav-item to="/insert">Insert</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <ul>
      <!-- <li><router-link to="/about-us">About Us</router-link></li>
      <li><router-link to="/history">History</router-link></li>
      <li><router-link to="/parent">Parent</router-link></li>
      <li><router-link to="/child">Child</router-link></li>
      <li><router-link to="/list">List of Student</router-link></li>
      <li><router-link to="/about-history">About and History</router-link></li> -->
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
