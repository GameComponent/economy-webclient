<template>
  <div>
    <selected-product-header />

    <div class="p-16">wat</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { V1Product, V1Item } from "@/../vendor/economy-client/api.ts";
import SelectedProductHeader from "../../components/SelectedProductHeader.vue";

@Component({
  components: {
    SelectedProductHeader
  }
})
export default class ProductDetailPriceDetail extends Vue {}
</script>
