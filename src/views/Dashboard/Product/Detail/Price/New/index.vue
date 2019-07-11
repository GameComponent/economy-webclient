<template>
  <div>
    <selected-product-header />

    <div class="p-16">
      <h1>New product prices</h1>
      <span>A price can be a currency and/or an item.</span>

      <div class="mt-8">
        <h2>Select currency</h2>
        <select-currency-amount class="mt-4" @input="onInputCurrencyAmount" />
      </div>

      <div class="mt-8">
        <h2>Select item</h2>
        <search-item-amount class="mt-4" @input="onInputItemAmount" />
      </div>

      <div class="mt-8 border" v-if="itemAmounts.length > 0 || currencyAmounts.length > 0">
        <h2>Overview</h2>

        <table class="gc-table mt-4">
          <thead>
            <tr>
              <th>Type</th>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="currencyAmount in currencyAmounts" :key="currencyAmount.id">
              <td>CURRENCY</td>
              <td>{{ currencyAmount.id }}</td>
              <td>{{ currencyAmount.currency.name }}</td>
              <td>{{ currencyAmount.amount }}</td>
              <td>
                <button @click="onClickRemoveCurrency(currencyAmount.id)" class="gc-button">Remove</button>
              </td>
            </tr>

            <tr v-for="itemAmount in itemAmounts" :key="itemAmount.id">
              <td>ITEM</td>
              <td>{{ itemAmount.id }}</td>
              <td>{{ itemAmount.item.name }}</td>
              <td>{{ itemAmount.amount }}</td>
              <td>
                <button @click="onClickRemoveItem(itemAmount.id)" class="gc-button">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="mt-8">
          <button class="gc-button" @click="onClickCreatePrice">Create price</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SelectedProductHeader from "../../components/SelectedProductHeader.vue";
import { V1Product, V1Item } from "@/../vendor/economy-client/api.ts";
import SelectCurrencyAmount from "@/components/SelectCurrencyAmount/index.vue";
import SearchItemAmount from "@/components/SearchItemAmount/index.vue";

@Component({
  components: {
    SelectedProductHeader,
    SelectCurrencyAmount,
    SearchItemAmount
  }
})
export default class ProductPriceNew extends Vue {
  public itemAmounts = [];
  public currencyAmounts = [];

  public onInputCurrencyAmount({ currencyId, currency, minAmount }) {
    this.currencyAmounts = [
      ...this.currencyAmounts.filter(x => x.id !== currencyId),
      {
        id: currencyId,
        currency,
        amount: minAmount
      }
    ];
  }

  public onInputItemAmount({ itemId, item, amount }) {
    this.itemAmounts = [
      ...this.itemAmounts.filter(x => x.id !== itemId),
      {
        id: itemId,
        item,
        amount
      }
    ];
  }

  public onClickRemoveCurrency(currencyAmountId) {
    this.currencyAmounts = this.currencyAmounts.filter(
      x => x.id !== currencyAmountId
    );
  }

  public onClickRemoveItem(itemAmountId) {
    this.itemAmounts = this.itemAmounts.filter(x => x.id !== itemAmountId);
  }

  public onClickCreatePrice() {
    const pricePromise = this.$economyService.createPrice({
      productId: this.$route.params.productId
    });

    let promises = [];

    // Create promise foreach currency amount
    this.currencyAmounts.forEach(currencyAmount => {
      const promise = pricePromise.then(({ price }) => {
        this.$economyService.attachPriceCurrency({
          priceId: price.id,
          currencyId: currencyAmount.id,
          amount: currencyAmount.amount
        });
      });

      promises.push(promise);
    });

    // Create promise foreach item amount
    this.itemAmounts.forEach(itemAmount => {
      const promise = pricePromise.then(({ price }) => {
        this.$economyService.attachPriceItem({
          priceId: price.id,
          itemId: itemAmount.id,
          amount: itemAmount.amount
        });
      });

      promises.push(promise);
    });

    Promise.all(promises).then(() => {
      this.$router.push({
        name: "dashboard-shop-product-detail-price"
      });
    });
  }
}
</script>
