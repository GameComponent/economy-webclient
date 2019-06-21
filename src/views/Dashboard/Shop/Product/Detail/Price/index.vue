<template>
  <div>
    <shop-header />
    <selected-product-header />

    <div class="p-16" v-if="product">
      <h1>Product prices</h1>
      <div class="mt-4">
        <gc-button-link
          :to="{
            name: 'dashboard-shop-product-detail-price-new',
          }"
        >
          Create new price
        </gc-button-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopHeader from '../../../components/ShopHeader.vue';
import SelectedProductHeader from '../components/SelectedProductHeader.vue';
import { V1Product, V1Item } from '@/../vendor/economy-client/api.ts';

@Component({
  components: {
    ShopHeader,
    SelectedProductHeader,
  },
})
export default class ProductPriceDetail extends Vue {
  public product: V1Product = null;

  public mounted() {
    this.$economyService.getProduct(this.$route.params.id)
      .then(({ product }) => {
        this.product = product;
      });
  }
}
</script>
