<template>
  <div>
    <shop-header />
    <selected-shop-header />
    <div class="p-16">
      <h1>Attach product</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShopHeader from "../../../../components/ShopHeader.vue";
import SelectedShopHeader from "../../../../components/SelectedShopHeader.vue";
import { V1Shop } from "@/../vendor/economy-client/api.ts";

@Component({
  components: {
    ShopHeader,
    SelectedShopHeader
  }
})
export default class ShopProductDetail extends Vue {
  public shop: V1Shop = null;

  public mounted() {
    this.$economyService.getShop(this.$route.params.id).then(({ shop }) => {
      this.shop = shop;
    });
  }
}
</script>
