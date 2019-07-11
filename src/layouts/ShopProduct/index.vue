<template>
  <div>
    <shop-product-header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShopProductHeader from "./components/ShopProductHeader.vue";

@Component({
  components: {
    ShopProductHeader
  }
})
export default class ShopProductLayout extends Vue {}
</script>
