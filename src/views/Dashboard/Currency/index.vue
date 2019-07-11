<template>
  <div class="p-16">
    <h1>Currencies</h1>

    <table class="gc-table text-left mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Short name</th>
          <th>Symbol</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in currencies" :key="currency.id">
          <td>{{ currency.id }}</td>
          <td>{{ currency.name }}</td>
          <td>{{ currency.shortName }}</td>
          <td>{{ currency.symbol }}</td>
          <td>
            <router-link
              :to="{
                name: 'currency-detail',
                params: {
                  currencyId: currency.id,
                },
              }"
            >View</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4">
      <gc-button-link :to="{
        name: 'currency-new',
      }">Create new currency</gc-button-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Currency extends Vue {
  public currencies = [];

  public mounted() {
    this.$economyService.listCurrency().then(({ currencies }) => {
      this.currencies = currencies;
    });
  }
}
</script>
