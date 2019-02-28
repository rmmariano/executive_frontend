<template>
  <div id="app">

    <main-left-side-bar/>

  </div>
</template>

<script>
import MainLeftSideBar from '@/components/MainLeftSideBar.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    MainLeftSideBar
  }
}
</script>

<!--
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
}
/* #nav {
  padding-bottom: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #00eeff;
}
</style>
-->