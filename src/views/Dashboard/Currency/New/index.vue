<template>
  <div class="p-16">
    <h1>Create new currency</h1>

    <div>
      <p class="pt4">
        <b class="gc-label-title">Name</b>
        <br />
        <input type="text" v-model="currency.name" class="gc-input" />
      </p>

      <p class="pt4">
        <b class="gc-label-title">Shortname</b>
        <br />
        <input type="text" v-model="currency.shortName" class="gc-input" />
      </p>

      <p class="pt4">
        <b class="gc-label-title">Symbol</b>
        <br />
        <input type="text" v-model="currency.symbol" class="gc-input" />
      </p>

      <button @click="handleClickCreateCurrency" class="gc-button mt-4">Create</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreateCurrency extends Vue {
  public currency = {
    name: "",
    shortName: "",
    symbol: ""
  };

  public handleClickCreateCurrency(): void {
    if (this.currency.name.length === 0) {
      alert("Please enter a currency name.");
      return;
    }

    this.$economyService
      .createCurrency({
        ...this.currency
      })
      .then(() => {
        this.$router.push({
          name: "currency"
        });
      });
  }
}
</script>

