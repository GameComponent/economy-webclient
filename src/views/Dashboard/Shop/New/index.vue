<template>
  <div>
    <shop-header />
    <div class="p-16">
      <h1>New Shop</h1>
      <div class="mt-4">
        <input
          v-model="shop.name"
          type="text"
          class="gc-input"
          placeholder="Shop name"
        >
      </div>

      <div class="mt-4">
        <button
          class="gc-button"
          @click="handleClickCreateShop"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { V1Shop } from '@/../vendor/economy-client/api.ts';
import ShopHeader from '../components/ShopHeader.vue';

@Component({
  components: {
    ShopHeader,
  },
})
export default class ShopNew extends Vue {
  public shop: V1Shop = {
    name: '',
  };

  public handleClickCreateShop(): void {
    if (this.shop.name.length === 0) {
      alert('Please enter an shop name.');
      return;
    }

    this.$economyService.createShop(this.shop)
      .then(() => {
        this.$router.push({
          name: 'dashboard-shop',
        });
      });
  }
}
</script>
