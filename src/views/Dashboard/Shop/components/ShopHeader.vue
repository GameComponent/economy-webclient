<style scoped>
.shop-header {
  height: 60px;
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
}

.shop-header__wrapper {
  padding: 0;
  margin: 0;
  list-style: none;
}

.shop-header__item {
  height: 60px;
  display: inline-block;
  line-height: 60px;
  font-weight: 600;
  color: #1b655e;
  fill: #1b655e;
  text-decoration: none;
  padding-left: 40px;
  padding-right: 40px;
  cursor: pointer;
}

.shop-header__item svg {
  display: inline-block;
  vertical-align: middle;
}

.shop-header__item:hover {
  background-color: rgba(238, 145, 145, 0.2);
}

.shop-header__item--active {
  border-bottom: 3px solid #38c172;
  color: #38c172;
  fill: #38c172;
}
</style>

<template>
  <div class="shop-header">
    <router-link
      :to="{ name: 'dashboard-shop' }"
      class="shop-header__item"
      :class="{
        'shop-header__item--active': isShopActive && !isProductActive,
      }"
      active-class="shop-header__item--active"
      exact
    >
      <icon-shop class="align-middle mr-3 mb-2"/>
      <span>Shops</span>
    </router-link>

    <router-link
      :to="{ name: 'dashboard-shop-product' }"
      class="shop-header__item"
      :class="{
        'shop-header__item--active': isProductActive,
      }"
      active-class="shop-header__item--active"
      exact
    >
      <icon-product class="align-middle mr-3 mb-1"/>
      <span>Products</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IconShop from '@/assets/icons/icon-store.svg';
import IconProduct from '@/assets/icons/icon-tag.svg';

const SHOP_ROUTE_SELECTOR = 'dashboard-shop';
const PRODUCT_ROUTE_SELECTOR = 'dashboard-shop-product';

@Component({
  components: {
    IconShop,
    IconProduct,
  },
})
export default class ShopHeader extends Vue {
  get isShopActive() {
    return this.$route.name.includes(SHOP_ROUTE_SELECTOR);
  }

  get isProductActive() {
    return this.$route.name.includes(PRODUCT_ROUTE_SELECTOR);
  }
}
</script>
