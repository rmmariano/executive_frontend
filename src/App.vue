<template>
  <div id="app">

    <div id="nav">
        <b-navbar toggleable="lg" type="light" variant="light">
          <b-navbar-brand href="#">MS3</b-navbar-brand>

          <b-navbar-toggle target="nav_collapse" />

          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <!-- <b-nav-item href="#">Link</b-nav-item> -->
              <!-- <b-nav-item href="#">Link</b-nav-item> -->
              <!-- <b-nav-item href="#">Link</b-nav-item> -->

              <router-link class="nav-link" to="/home">Home</router-link>
              <router-link class="nav-link" to="/explore">Explore</router-link>

              <router-link class="nav-link" to="/vue/home">[ VueHome</router-link>
              <router-link class="nav-link" to="/vue/about">VueAbout ]</router-link>

              <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form> -->

              <!-- <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">BR</b-dropdown-item>
              </b-nav-item-dropdown> -->

              <!-- <b-nav-item-dropdown right> -->
                <!-- Using button-content slot -->
                <!-- <template slot="button-content"><em>User</em></template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
              </b-nav-item-dropdown> -->

              <router-link class="nav-link" to="/login">Login</router-link>

            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
    </div>

    <!-- insert the related view here -->
    <router-view/>

  </div>
</template>

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
