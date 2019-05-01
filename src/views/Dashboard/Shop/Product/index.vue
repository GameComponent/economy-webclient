<template>
  <div>
    <shop-header />
    <div class="p-16">
      <h1>Product</h1>

      <table class="gc-table text-left mt-4">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>
              <router-link
                :to="{
                  name: 'dashboard-shop-product-detail',
                  params: {
                    id: product.id,
                  },
                }"
              >
                View
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="mt-4">
        <gc-button-link
          :to="{
            name: 'dashboard-shop-product-new',
          }"
        >
          Create new product
        </gc-button-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { V1Product } from '@/../vendor/economy-client/api.ts';
import ShopHeader from '../components/ShopHeader.vue';

@Component({
  components: {
    ShopHeader,
  },
})
export default class Product extends Vue {
  public products: Array<V1Product> = [];

  public mounted() {
    this.$economyService.listProduct()
      .then(({ products }) => {
        this.products = products;
      });
  }
}
</script>
