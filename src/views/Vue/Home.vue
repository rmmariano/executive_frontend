<template>
  <div id="vue-home" class="ms3-page-content">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'vue_home',
  components: {
    HelloWorld
  }
}
</script>

<style>
#vue-home{
  text-align: center;
}
</style>

