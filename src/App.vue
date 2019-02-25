<template>
  <div id="app">

    <!-- old navbar -->
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/explore">Explore</router-link> |
      <router-link to="/login">Login</router-link> |
      [
      <router-link to="/vue/home">VueHome</router-link> |
      <router-link to="/vue/about">VueAbout</router-link>
      ]
    </div> -->

    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">MS3</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- / routes -->
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/explore">Explore</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <!-- /vue routes -->
            <li class="nav-item">
              <router-link class="nav-link" to="/vue/home">[ VueHome</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/vue/about">VueAbout ]</router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>

    <!-- insert the related view here -->
    <router-view/>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #00eeff;
}
</style>
