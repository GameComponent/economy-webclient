<template>
  <div>
    <div
      v-for="product in products"
      :key="product.id"
    >
      <div class="product-header mt-4">
        {{ product.name }}
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { V1Product } from '@/../vendor/economy-client/api.ts'

@Component
export default class ProductTable extends Vue {
  @Prop({ default: [] })
  products: Array<V1Product>
}
</script>
