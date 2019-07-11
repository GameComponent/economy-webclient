<template>
  <div>
    <shop-header />
    <selected-product-header />

    <div class="p-16" v-if="product">
      <h1>Product contents</h1>

      <!-- Items -->
      <div class="mt-8">
        <h2>Items</h2>

        <table class="gc-table text-left mt-4" v-if="product.items">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item name</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="productItem in product.items" :key="productItem.id">
              <td>
                <router-link
                  style="margin-left: 0; margin-right: 0;"
                  :to="{
                    name: 'item-detail',
                    params: {
                      itemId: productItem.item.id,
                    },
                  }"
                >{{ productItem.item.id }}</router-link>
              </td>
              <td>{{ productItem.item.name }}</td>
              <td>{{ productItem.amount }}</td>
              <td>
                <button class="gc-button" @click="handleClickDetachItem(productItem)">Detach</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          v-if="!product.items"
          class="mt-4 p-4 border rounded"
          style="background-color: #EEE;"
        >No items attached to this item</div>
      </div>

      <!-- Currencies -->
      <div class="mt-8">
        <h2>Currencies</h2>

        <table class="gc-table text-left mt-4" v-if="product.currencies">
          <thead>
            <tr>
              <th>Currency ID</th>
              <th>Currency name</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="productCurrency in product.currencies" :key="productCurrency.id">
              <td>
                <router-link
                  style="margin-left: 0; margin-right: 0;"
                  :to="{
                    name: 'currency-detail',
                    params: {
                      itemId: productCurrency.currency.id,
                    },
                  }"
                >{{ productCurrency.currency.id }}</router-link>
              </td>
              <td>{{ productCurrency.currency.name }}</td>
              <td>{{ productCurrency.amount }}</td>
              <td>
                <button class="gc-button" @click="handleClickDetachCurrency(productCurrency)">Detach</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          v-if="!product.currencies"
          class="mt-4 p-4 border rounded"
          style="background-color: #EEE;"
        >No currencies attached to this item</div>
      </div>

      <div class="mt-8" v-if="itemsWhichAreNotAttached && itemsWhichAreNotAttached.length > 0">
        <h2>Attach item</h2>
        <table class="gc-table text-left mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itemsWhichAreNotAttached" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <input
                  type="number"
                  class="gc-input"
                  placeholder="1"
                  @input="e => handleInputItemAmount(e, item)"
                  :value="items[item.id] || '1'"
                />
              </td>
              <td>
                <button class="gc-button" @click="handleClickAttachItem(item)">Attach</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SelectedProductHeader from "../components/SelectedProductHeader.vue";
import { V1Product, V1Item } from "@/../vendor/economy-client/api.ts";

@Component({
  components: {
    SelectedProductHeader
  }
})
export default class ProductItemDetail extends Vue {
  public product: V1Product = null;
  public items: V1Item[] = [];
  public itemAmount: { [key: string]: string } = {};

  public mounted() {
    this.$economyService
      .getProduct(this.$route.params.productId)
      .then(({ product }) => {
        this.product = product;
      });

    this.$economyService.listItem().then(({ items }) => {
      this.items = items;
    });
  }

  public handleClickDetachItem({ id }) {
    this.$economyService.detachItem(id).then(() => {
      this.$router.go(this.$router.currentRoute as any);
    });
  }

  public handleClickDetachCurrency({ id }) {
    // TODO: implement
    console.warn("not implemented yet");
  }

  public handleClickAttachItem({ id }) {
    this.$economyService
      .attachItem({
        itemId: id,
        productId: this.$route.params.productId,
        amount: this.itemAmount[id] || "1"
      })
      .then(() => {
        this.$router.go(this.$router.currentRoute as any);
      });
  }

  public handleInputItemAmount({ target: { value } }, { id }) {
    this.itemAmount[id] = `${value}`;
  }

  get attachedItemIds() {
    if (!this.product) {
      return [];
    }
    if (!this.product.items) {
      return [];
    }

    return this.product.items.map(x => x.item.id);
  }

  get itemsWhichAreNotAttached() {
    if (!this.items) {
      return [];
    }

    return this.items.filter(x => !this.attachedItemIds.includes(x.id));
  }
}
</script>
