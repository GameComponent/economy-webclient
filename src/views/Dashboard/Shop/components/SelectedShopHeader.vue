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

  .shop-header__item:hover {
    background-color: rgba(238, 145, 145, .2);
  }

  .shop-header__item--back {
    border-right: 1px solid #eee;
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
      class="shop-header__item shop-header__item--back"
      active-class="shop-header__item--active"
      exact
    >
      <icon-back class="align-middle inline" />
      Back
    </router-link>

    <router-link
      :to="{
        name: 'dashboard-shop-detail',
      }"
      class="shop-header__item"
      active-class="shop-header__item--active"
      exact
    >
      Details
    </router-link>

    <router-link
      :to="{ name: 'dashboard-shop-detail-product' }"
      class="shop-header__item"
      active-class="shop-header__item--active"
    >
      Products
    </router-link>
  </div>
</template>

<script lang="ts">
import IconBack from '@/assets/icons/icon-cheveron-left.svg';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    IconBack,
  },
})
export default class ShopHeader extends Vue {}
</script>
