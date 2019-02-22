<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Create new currency</h1>

    <div>
      <input type="text" v-model="currency.name">
    </div>

    <div>
      <button @click="handleClickCreateCurrency">
        Create
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CreateCurrency extends Vue {
  public currency = {
    name: '',
  };

  public handleClickCreateCurrency(): void {
    console.log(this.currency);

    if (this.currency.name.length === 0) {
      alert('Please enter a currency name.');
      return;
    }

    this.$economyService.createCurrency({
      api: 'v1',
      ...this.currency,
    })
      .then(() => {
        this.$router.push({
          name: 'dashboard-currency',
        });
      });
  }
}
</script>

