<template>
  <div>
    <shop-header />
    <selected-product-header />

    <div class="p-16" v-if="product">
      <h1>Product detail</h1>

      <table class="mt-4">
        <tr>
          <td>
            <b>Name:</b>
          </td>
          <td>{{ product.name }}</td>
        </tr>

        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>

      <div class="mt-8">
        <h2>Raw</h2>
        <pre class="gc-pre">{{ JSON.stringify(product, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { V1Product, V1Item } from "@/../vendor/economy-client/api.ts";
import SelectedProductHeader from "./components/SelectedProductHeader.vue";

@Component({
  components: {
    SelectedProductHeader
  }
})
export default class ProductDetail extends Vue {
  public product: V1Product = null;

  public mounted() {
    this.$economyService
      .getProduct(this.$route.params.productId)
      .then(({ product }) => {
        this.product = product;
      });
  }
}
</script>
