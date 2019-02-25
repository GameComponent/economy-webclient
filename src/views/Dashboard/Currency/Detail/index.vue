<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Currency</h1>
    <pre>{{ JSON.stringify(currency, null, 2) }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CurrencyDetail extends Vue {
  public currency = null;

  public mounted() {
    this.$economyService.getCurrency(this.$route.params.id)
      .then(({ currency }) => {
        this.currency = currency;
      });
  }
}
</script>
