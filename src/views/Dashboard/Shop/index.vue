<template>
  <div>
    <shop-header />
    <div class="p-16">
      <h1>Shop</h1>
        <table class="gc-table text-left mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="shop in shops" :key="shop.id">
              <td>{{ shop.id }}</td>
              <td>{{ shop.name }}</td>
              <td>
                <router-link
                  :to="{
                    name: 'dashboard-shop-detail',
                    params: {
                      id: shop.id,
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
              name: 'dashboard-shop-new',
            }"
          >
            Create new shop
          </gc-button-link>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopHeader from './components/ShopHeader.vue';
import { V1Shop } from '@/../vendor/economy-client/api.ts';

@Component({
  components: {
    ShopHeader,
  },
})
export default class Shop extends Vue {
  public shops: Array<V1Shop> = [];

  public mounted() {
    this.$economyService.listShop()
      .then(({ shops }) => {
        this.shops = shops;
      });
  }
}
</script>
