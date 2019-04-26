<template>
  <div>
    <shop-header />
    <div class="p-16">
      <h1>Product detail</h1>
      <pre class="gc-pre">{{ JSON.stringify(product, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopHeader from '../../components/ShopHeader.vue';
import { V1Product } from '@/../vendor/economy-client/api.ts';

@Component({
  components: {
    ShopHeader,
  },
})
export default class ProductDetail extends Vue {
  public product: V1Product = null;

  public mounted() {
    this.$economyService.getProduct(this.$route.params.id)
      .then(({ product }) => {
        this.product = product;
      });
  }
}
</script>
