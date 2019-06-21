<template>
  <div>
    <div style="background-color: #F2F5F7; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
      <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 10px;">
        <input
          class="gc-input"
          type="text"
          v-model="query"
          placeholder="Search item"
        >
        <button
          class="gc-button"
          style="padding: 5px; margin-left: 10px;"
          @click="handleClickSearch"
        >
          Search
        </button>
      </div>
      <table class="gc-table" v-if="items && items.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>
              {{ item.id }}
            </td>
            <td style="text-align: left;">
              {{ item.name }}
            </td>
            <td>
              <input
                v-if="item"
                type="radio"
                name="selectedPlayer"
                :value="item.id"
                v-model="selectedItem"
              >
            </td>
          </tr>
        </tbody>

        <tfoot v-if="selectedItem">
          <tr>
            <td style="padding: 20px" colspan="3">
              <div class="inline-block">
                <label for="minAmount">Min. amount: </label>
                <input
                  v-model="minAmount"
                  type="number"
                  class="gc-input"
                  name="minAmount"
                >
              </div>

              <div class="inline-block ml-4">
                <label for="maxAmount">Max. amount: </label>
                <input
                  v-model="maxAmount"
                  type="number"
                  class="gc-input"
                  name="maxAmount"
                >
              </div>

              <div class="inline-block ml-4">
                <button
                  class="gc-button"
                  @click="handleClickGiveItem"
                >
                  Give item
                </button>
              </div>
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
export default class SearchItemAmount extends Vue {
  public query: string = '';
  public minAmount: number = 1;
  public maxAmount: number = 1;
  public items = [];
  public selectedItem = null;

  public handleClickSearch() {
    this.reset();

    this.$economyService.searchItem({
      query: this.query,
    })
      .then(({ items }) => {
        this.items = items;
      });
  }

  public reset() {
    this.selectedItem = null;
    this.items = [];
  }

  public handleClickGiveItem() {
    this.$emit('input', {
      itemId: this.selectedItem,
      amount: {
        minAmount: this.minAmount,
        maxAmount: this.maxAmount,
      },
    });
  }
}
</script>
