<template>
  <div>
    <selected-shop-header />
    <div class="p-16">
      <h1>Shop Detail</h1>
      <pre class="gc-pre">{{ JSON.stringify(shop, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SelectedShopHeader from "../components/SelectedShopHeader.vue";
import { V1Shop } from "@/../vendor/economy-client/api.ts";

@Component({
  components: {
    SelectedShopHeader
  }
})
export default class ShopDetail extends Vue {
  public shop: V1Shop = null;

  public mounted() {
    this.$economyService.getShop(this.$route.params.shopId).then(({ shop }) => {
      this.shop = shop;
    });
  }
}
</script>
