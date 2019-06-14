<template>
  <div>
    <select-currency-amount v-if="!currencyId || currencyId === ''" @input="handleInputCurrency"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { V1GiveCurrencyRequest } from "@/../vendor/economy-client/api.ts";
import SelectCurrencyAmount from "@/components/SelectCurrencyAmount/index.vue";

@Component({
  components: {
    SelectCurrencyAmount
  }
})
export default class GiveCurrency extends Vue {
  @Prop() private currencyId: string;
  @Prop() private storageId: string;

  public request: V1GiveCurrencyRequest = {
    currencyId: "",
    storageId: "",
    amount: {
      minAmount: "0",
      maxAmount: "0"
    }
  };

  public mounted() {
    this.request.currencyId = this.currencyId;
    this.request.storageId = this.storageId;
  }

  public handleInputCurrency({ currencyId, minAmount, maxAmount }) {
    this.request.currencyId = currencyId;
    this.request.amount.minAmount = minAmount;
    this.request.amount.maxAmount = maxAmount;

    this.$economyService.giveCurrency(this.request).then(() => {
      this.$router.go(this.$router.currentRoute as any);
    });
  }
}
</script>
