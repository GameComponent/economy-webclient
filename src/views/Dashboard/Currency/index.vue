<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Currencies</h1>
    <dir>{{ currencies }}</dir>
    <router-link
      :to="{
        name: 'dashboard-currency-new',
      }"
    >
      Create new currency
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Currency extends Vue {
  public currencies = [];

  public mounted() {
    this.$economyService.listCurrency()
      .then(({ currencies }) => {
        this.currencies = currencies;
      });
  }
}
</script>