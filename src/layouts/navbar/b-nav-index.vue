<template>
  <div>
    <b-navbar toggleable="lg" class="container-fluid bg-white" variant="info">
      <router-link :to="{ name: 'home' }">
        <h5>EPRO101 - Assignment 3</h5>
      </router-link>
      <router-link :to="{ name: 'references' }">
        <h5>Reference List</h5>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <h5>Kajal Rai IKO3000189 - SIU YAU YUENG </h5>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BNavbar } from "bootstrap-vue";

export default {
  components: {
    BNavbar,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/layouts/navbar";
</style>
