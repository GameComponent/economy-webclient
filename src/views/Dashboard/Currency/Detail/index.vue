<template>
  <div class="p-16">
    <h1>Currency</h1>
    <pre class="gc-pre mt-4">{{ JSON.stringify(currency, null, 2) }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CurrencyDetail extends Vue {
  public currency = null;

  public mounted() {
    this.$economyService
      .getCurrency(this.$route.params.currencyId)
      .then(({ currency }) => {
        this.currency = currency;
      });
  }
}
</script>
