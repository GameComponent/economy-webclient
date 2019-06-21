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
          v-for="stackBalancingMethod in stackBalancingMethods"
          :key="stackBalancingMethod"
          :value="stackBalancingMethod"
        >
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
import {
  V1CreateItemRequest,
  V1StackBalancingMethod,
} from '@/../vendor/economy-client/api.ts';

@Component
export default class CreateItem extends Vue {
  public v1StackBalancingMethod = V1StackBalancingMethod;

  public item: V1CreateItemRequest  = {
    name: '',
    stackable: false,
    stackMaxAmount: '0',
    stackBalancingMethod: V1StackBalancingMethod.DEFAULT,
  };

  public handleClickCreateItem(): void {
    if (this.item.name.length === 0) {
      alert('Please enter an item name.');
      return;
    }

    this.$economyService.createItem({
      ...this.item,
    })
      .then(() => {
        this.$router.push({
          name: 'dashboard-item',
        });
      });
  }

  get stackBalancingMethods() {
    return Object.values(this.v1StackBalancingMethod)
      .filter((method: string) => method.includes('_') || method === 'DEFAULT')
      .filter((v, i, s) => s.indexOf(v) === i);
  }
}
</script>
