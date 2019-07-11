<style scoped>
.product-header {
  background-color: #dedfe0;
  color: #4a4a4a;
  text-transform: uppercase;
  padding: 20px;
  border: 1px solid #eee;
  border-bottom: 0;
  font-weight: 500;
  letter-spacing: 0.05em;
}
</style>

<template>
  <div>
    <selected-shop-header />
    <div class="p-16">
      <h1>Shop Product</h1>

      <div v-if="shop">
        <div v-for="product in shop.products" :key="product.id">
          <div class="product-header mt-4 clearfix overflow-hidden">
            <div class="inline-block float-left">{{ product.name }}</div>
            <div class="inline-block float-right">
              <span
                class="bg-red-500 p-2 rounded text-white text-sm cursor-pointer border-0 hover:bg-red-600"
                @click="handleClickDetachProduct(product)"
              >Detach product</span>
            </div>
          </div>
          <table class="gc-table gc-table--small-head text-left">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="productItem in product.items" :key="productItem.id">
                <td>{{ productItem.item.id }}</td>
                <td>{{ productItem.item.name }}</td>
                <td>{{ productItem.amount }}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SelectedShopHeader from "../../components/SelectedShopHeader.vue";
import { V1Shop } from "@/../vendor/economy-client/api.ts";

@Component({
  components: {
    SelectedShopHeader
  }
})
export default class ShopProductDetail extends Vue {
  public shop: V1Shop = null;

  public mounted() {
    this.$economyService.getShop(this.$route.params.shopId).then(({ shop }) => {
      this.shop = shop;
    });
  }

  public handleClickDetachProduct({ id }) {
    this.$economyService.detachProduct(id).then(() => {
      this.$router.go(this.$router.currentRoute as any);
    });
  }
}
</script>
