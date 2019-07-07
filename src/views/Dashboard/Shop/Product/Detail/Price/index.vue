<style scoped>
.price-header {
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
    <shop-header />
    <selected-product-header />

    <div class="p-16" v-if="product">
      <h1>Product prices</h1>
      <div v-for="price in product.prices" :key="price.id">
        <div class="price-header mt-4 clearfix overflow-hidden">
          <div class="inline-block float-left">{{ price.id }}</div>
          <div class="inline-block float-right">
            <span
              class="bg-blue-500 p-2 rounded text-white text-sm cursor-pointer border-0 hover:bg-blue-600"
            >
              <router-link
                :to="{
                  name: 'dashboard-shop-product-detail-price-detail',
                  params: {
                    priceId: price.id,
                  },
                }"
              >Edit</router-link>
            </span>
            <span
              class="ml-2 bg-red-500 p-2 rounded text-white text-sm cursor-pointer border-0 hover:bg-red-600"
            >Detach price</span>
          </div>
        </div>
        <table class="gc-table gc-table--small-head text-left">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Name</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="priceCurrency in price.currencies" :key="priceCurrency.id">
              <td>{{ priceCurrency.id }}</td>
              <td>Currency</td>
              <td>
                <div>{{ priceCurrency.currency.name }}</div>
                <div class="gc-table__description">({{ priceCurrency.currency.id }})</div>
              </td>
              <td>{{ priceCurrency.amount }}</td>
              <td>
                <button class="gc-button" @click="onClickDetachPriceCurrency(priceCurrency)">Detach</button>
              </td>
            </tr>

            <tr v-for="priceItem in price.items" :key="priceItem.id">
              <td>{{ priceItem.id }}</td>
              <td>Currency</td>
              <td>
                <div>{{ priceItem.item.name }}</div>
                <div class="gc-table__description">({{ priceItem.item.id }})</div>
              </td>
              <td>{{ priceItem.amount }}</td>
              <td>
                <button class="gc-button" @click="onClickDetachPriceItem(priceItem)">Detach</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-4">
        <gc-button-link
          :to="{
            name: 'dashboard-shop-product-detail-price-new',
          }"
        >Create new price</gc-button-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShopHeader from "../../../components/ShopHeader.vue";
import SelectedProductHeader from "../components/SelectedProductHeader.vue";
import { V1Product, V1Item } from "@/../vendor/economy-client/api.ts";

@Component({
  components: {
    ShopHeader,
    SelectedProductHeader
  }
})
export default class ProductDetailPrice extends Vue {
  public product: V1Product = null;

  public mounted() {
    this.$economyService
      .getProduct(this.$route.params.productId)
      .then(({ product }) => {
        this.product = product;
      });
  }

  public onClickDetachPriceCurrency({ id }) {
    this.$economyService.detachPriceCurrency(id).then(() => {
      this.$router.go(this.$router.currentRoute as any);
    });
  }

  public onClickDetachPriceItem({ id }) {
    this.$economyService.detachPriceItem(id).then(() => {
      this.$router.go(this.$router.currentRoute as any);
    });
  }

  get prices() {
    if (!this.product || !this.product.prices) {
      return [];
    }

    return this.product.prices;
  }
}
</script>
