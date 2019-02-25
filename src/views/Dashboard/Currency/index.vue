<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Currencies</h1>
    <table style="text-align: left;" class="gc-table">
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
                name: 'dashboard-currency-detail',
                params: {
                  id: currency.id,
                },
              }"
            >
              View
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

  <div style="margin-top: 20px;">
    <gc-button-link
      :to="{
        name: 'dashboard-currency-new',
      }"
    >
      Create new currency
    </gc-button-link>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Currency extends Vue {
  public currencies = [];

  public mounted() {
    const kaas = this.$economyService.listCurrency();
    console.log(kaas);
    this.$economyService.listCurrency()
      .then(({ currencies }) => {
        this.currencies = currencies;
      });
  }
}
</script>
