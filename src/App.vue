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

<style>
/* global styles */
.ms3-page-content {
  padding: 40px 40px;
}
</style>
