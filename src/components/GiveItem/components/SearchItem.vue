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
            <td style="padding-left: 20px; padding-bottom: 10px;">
              Min. amount:
              <input
                v-model="minAmount"
                type="number"
                class="gc-input"
              >

              Max. amount:
              <input
                v-model="maxAmount"
                type="number"
                class="gc-input"
              >
            </td>
            <td style="padding-left: 20px; padding-bottom: 10px;">
              <button
                class="gc-button"
                @click="handleClickGiveItem"
              >
                Give item
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
export default class SearchItem extends Vue {
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
        console.log('item search results: ', items);
        this.items = items;
      });
  }

  public reset() {
    this.selectedItem = null
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
