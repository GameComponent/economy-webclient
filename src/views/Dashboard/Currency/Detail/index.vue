<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Currencies</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CurrencyDetail extends Vue {
  public currency = null;

  public mounted() {
    alert('currency detail mounted');
  }
}
</script>