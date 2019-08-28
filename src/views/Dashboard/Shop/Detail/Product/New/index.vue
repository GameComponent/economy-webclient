<template>
  <div class="p-16">
    <h1>Attach product</h1>

    <div v-if="shop && shop.products" class="mt-8">
      <table class="gc-table text-left">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in availableProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>
              <input v-model="checkedProductIds" type="checkbox" :value="product.id" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-8">
      <button @click="onClickAttachProducts" class="gc-button">Attach</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { V1Product, V1Shop } from "@/../vendor/economy-client/api.ts";

@Component({})
export default class ShopProductDetail extends Vue {
  public shop: V1Shop = null;
  public products: V1Product[] = [];
  public productId: string = "";
  public checkedProductIds: string[] = [];
  public mounted() {
    this.$economyService.getShop(this.$route.params.shopId).then(({ shop }) => {
      this.shop = shop;
    });

    this.$economyService.listProduct().then(({ products }) => {
      this.products = products;
    });
  }

  public onClickAttachProducts() {
    const promises = this.checkedProductIds.map(productId => {
      return this.$economyService.attachProduct({
        shopId: this.$route.params.shopId,
        productId: this.productId
      });
    });

    Promise.all(promises).then(() => {
      this.$router.push({
        name: "shop-detail-product-detail"
      });
    });
  }

  get availableProducts() {
    if (!this.shop || !this.shop.products) {
      return [];
    }

    const shopProductsMap = {};
    this.shop.products.forEach(product => {
      shopProductsMap[product.id] = true;
    });

    return this.products.filter(product => !shopProductsMap[product.id]);
  }
}
</script>
