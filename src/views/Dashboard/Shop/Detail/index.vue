<template>
  <div class="p-16">
    <h1>Shop Detail</h1>
    <pre class="gc-pre">{{ JSON.stringify(shop, null, 2) }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { V1Shop } from "@/../vendor/economy-client/api.ts";

@Component({})
export default class ShopDetail extends Vue {
  public shop: V1Shop = null;

  public mounted() {
    this.$economyService.getShop(this.$route.params.shopId).then(({ shop }) => {
      this.shop = shop;
    });
  }
}
</script>
