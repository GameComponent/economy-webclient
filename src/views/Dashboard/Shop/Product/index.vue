<template>
  <div>
    <shop-header />
    <div class="p-16">
      <h1>Product</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopHeader from '../components/ShopHeader.vue';

@Component({
  components: {
    ShopHeader,
  },
})
export default class Product extends Vue {}
</script>
