<template>
  <div>
    <div style="background-color: #F2F5F7; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
      <div style="padding-left: 20px; padding-top: 10px; padding-bottom: 10px;">
        <select
          v-model="selectedCurrencyId"
          class="gc-input"
        >
          <option :value="null">Select a currency</option>
          <option
            v-for="currency in currencies"
            :value="currency.id"
            :key="currency.id"
          >
            {{ currency.name }}
          </option>
        </select>
      </div>

      <table class="gc-table" v-if="selectedCurrency">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Shortname</th>
            <th>Symbol</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {{ selectedCurrency.id }}
            </td>
            <td style="text-align: left;">
              {{ selectedCurrency.name }}
            </td>
            <td style="text-align: left;">
              {{ selectedCurrency.shortName }}
            </td>
            <td style="text-align: left;">
              {{ selectedCurrency.symbol }}
            </td>
            <td>
              <input
                v-model="selectedAmount"
                type="number"
                class="gc-input"
              >
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td style="padding-left: 20px; padding-top: 10px; padding-bottom: 10px;">
              <button
                class="gc-button"
                :class="{
                  'gc-button--disabled': !selectedCurrency || !selectedAmount,
                }"
                @click="handleClickGiveCurrency"
              >
                Select currency
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class SelectCurrencyAmount extends Vue {
  public currencies = [];
  public selectedCurrencyId = null;
  public selectedAmount = 0;

  public mounted() {
    this.$economyService.listCurrency()
      .then(({ currencies }) => {
        this.currencies = currencies;
      });
  }

  public handleClickGiveCurrency() {
    this.$emit('input', {
      currencyId: this.selectedCurrencyId,
      currency: this.currencies.find(x => x.id === this.selectedCurrencyId),
      amount: this.selectedAmount,
    });
  }

  get selectedCurrency() {
    if (!this.selectedCurrencyId) {
      return null;
    }

    return this.currencies
      .find(currency => currency.id === this.selectedCurrencyId);
  }
}
</script>
