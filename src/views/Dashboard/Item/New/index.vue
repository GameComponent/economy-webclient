<template>
  <div class="p-16">
    <h1>Create new item</h1>

    <div class="mt-4">
      <label for="name">Name</label>
      <input
        v-model="item.name"
        type="text"
        class="gc-input"
        placeholder="Item name"
        name="name"
      >
    </div>

    <div class="mt-4">
      <label for="stackable">Stackable</label>
      <input
        v-model="item.stackable"
        type="checkbox"
        class="gc-input"
        name="stackable"
      >
    </div>

    <div class="mt-4">
      <label for="stackMaxAmount">Stack max amount(0 is infinite)</label>
      <input
        v-model="item.stackMaxAmount"
        type="number"
        class="gc-input"
        name="stackMaxAmount"
      >
    </div>

    <div class="mt-4">
      <label for="ItemStackBalancingMethod">Stack balancing method</label>
      <select
        v-model="item.stackBalancingMethod"
        type="checkbox"
        class="gc-input"
        name="stackBalancingMethod"
      >
        <option
          v-for="ItemStackBalancingMethod in ItemStackBalancingMethods"
          :key="ItemStackBalancingMethod"
          :value="ItemStackBalancingMethod"
        >
          {{ ItemStackBalancingMethod }}
        </option>
      </select>
    </div>

    <div class="mt-4">
      <button
        class="gc-button"
        @click="handleClickCreateItem"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { ItemStackBalancingMethod } from '@/../vendor/economy-client/api.ts';
import { V1CreateItemRequest } from '@/../vendor/economy-client/api.ts';

@Component
export default class CreateItem extends Vue {
  public ItemStackBalancingMethods = [
    'DEFAULT',
    'UNBALANCED_CREATE_NEW_STACKS',
    'BALANCED_FILL_EXISTING_STACKS',
    'UNBALANCED_FILL_EXISTING_STACKS',
  ];

  // public item: V1CreateItemRequest  = {
  public item = {
    name: '',
    stackable: false,
    stackMaxAmount: 0,
    stackBalancingMethod: 'DEFAULT',
  };

  public handleClickCreateItem(): void {
    if (this.item.name.length === 0) {
      alert('Please enter an item name.');
      return;
    }

    this.$economyService.createItem({
      api: 'v1',
      ...this.item,
    })
      .then(() => {
        this.$router.push({
          name: 'dashboard-item',
        });
      });
  }
}
</script>
