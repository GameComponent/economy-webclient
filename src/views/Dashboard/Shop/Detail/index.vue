<template>
  <div>
    <shop-header />
    <div class="p-16">
      <h1>Shop Detail</h1>
      <pre class="gc-pre">{{ JSON.stringify(shop, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopHeader from '../components/ShopHeader.vue';
import { V1Shop } from '@/../vendor/economy-client/api.ts';

@Component({
  components: {
    ShopHeader,
  },
})
export default class ShopDetail extends Vue {
   public shop: V1Shop = null;

  public mounted() {
    this.$economyService.getShop(this.$route.params.id)
      .then(({ shop }) => {
        this.shop = shop;
      });
  }
}
</script>
