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
  padding: 40px 0px 40px 40px;
}
@media screen and (min-width: 768px) {
  .page-wrapper.toggled .ms3-page-content {
    padding-left: 250px;
  }
}
/* html, body, .olmap {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
} */
</style>
