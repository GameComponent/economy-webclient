<style lang="scss">
.menu-icon {
  position: fixed; /* Needs to stay visible for all mobile scrolling */
  display: flex;
  top: 0px;
  left: 0px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
}

.menu-icon__circle {
  background-color: #38c172;
  color: white;
  fill: white;
  width: 40px;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 100%;
}
</style>

<template>
  <div class="menu-icon" @click.prevent.stop="$emit('click')">
    <div class="menu-icon__circle">
      <icon-menu />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import IconMenu from "@/assets/icons/icon-menu.svg";

@Component({
  components: {
    IconMenu
  }
})
export default class DashboardMenuIcon extends Vue {}
</script>
