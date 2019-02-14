<style lang="scss">
/* Assign grid instructions to our parent grid container, mobile-first (hide the sidenav) */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'main';
  height: 100vh;
  overflow: hidden;
}

.main {
  grid-area: main;
  background-color: #F8F8F8;
  overflow-x: hidden;
  overflow-y: auto;
}

/* Non-mobile styles, 750px breakpoint */
@media only screen and (min-width: 46.875em) {
  /* Show the sidenav */
  .grid-container {
    grid-template-columns: 240px 1fr;
    grid-template-areas:
      "sidenav main"
  }
}
</style>

<template>
  <div class="grid-container">
    <dashboard-menu-icon />
    <dashboard-navigation />

    <main class="main">
      <router-view/>
    </main>
  </div> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DashboardNavigation from './components/DashboardNavigation.vue';
import DashboardMenuIcon from './components/DashboardMenuIcon.vue';

@Component({
  components: {
    DashboardNavigation,
    DashboardMenuIcon,
  },
})
export default class Dashboard extends Vue {}
</script>
