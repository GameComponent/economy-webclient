<template>
  <div>
    <selected-shop-header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SelectedShopHeader from "./components/SelectedShopHeader.vue";

@Component({
  components: {
    SelectedShopHeader
  }
})
export default class ShopLayout extends Vue {}
</script>
