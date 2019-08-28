<template>
  <div>
    <shop-header />
    <div class="p-16">
      <h1>New Product</h1>

      <div class="mt-4">
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input v-model="product.name" type="text" class="gc-input" />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <button @click="handleClickCreateProduct" class="gc-button">Create</button>
            </td>
          </tr>

          <tr v-if="error">
            <td></td>
            <td>
              <div class="bg-red-500 text-white rounded p-3">{{ error }}</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ProductNew extends Vue {
  public product = {
    name: ""
  };

  public error = null;

  public handleClickCreateProduct(): void {
    if (this.product.name.length === 0) {
      alert("Please enter a product name.");
      return;
    }

    this.$economyService.createProduct(this.product).then(({ product }) => {
      this.$router.push({
        name: "product-detail",
        params: {
          productId: product.id
        }
      });
    });
  }
}
</script>
