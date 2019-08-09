<style scoped>
.extend {
  background-color: #f3f3f3;
  border: 1px solid #e4e4e4;
}
</style>

<template>
  <div class="p-16">
    <h1>Create new item</h1>

    <div class="mt-4">
      <label for="name">Name</label>
      <input
        v-model="item.name"
        type="text"
        class="gc-input ml-2"
        placeholder="Item name"
        name="name"
      />
    </div>

    <div class="mt-4">
      <label for="stackable">Stackable</label>
      <input v-model="item.stackable" type="checkbox" class="gc-input ml-2" name="stackable" />
    </div>

    <div v-show="item.stackable" class="extend mt-4 p-4 rounded">
      <div>
        <label for="stackMaxAmount">Stack max amount(0 is infinite)</label>
        <input
          v-model="item.stackMaxAmount"
          type="number"
          class="gc-input ml-2"
          name="stackMaxAmount"
        />
      </div>

      <div class="mt-4">
        <label for="ItemStackBalancingMethod">Stack balancing method</label>
        <select
          v-model="item.stackBalancingMethod"
          type="checkbox"
          class="gc-input ml-2"
          name="stackBalancingMethod"
        >
          <option
            v-for="stackBalancingMethod in stackBalancingMethods"
            :key="stackBalancingMethod"
            :value="stackBalancingMethod"
          >{{ stackBalancingMethod }}</option>
        </select>
      </div>
    </div>

    <div class="mt-4">
      <label for="stackable">Metadata</label>
      <codemirror v-model="item.metadata"></codemirror>
    </div>

    <div class="mt-4">
      <button class="gc-button" @click="handleClickCreateItem">Create</button>
    </div>

    <div v-if="error" class="mt-4">
      <div class="bg-red-500 text-white rounded p-3">
        <span class="font-semibold">Error:</span>
        &nbsp;
        <span>{{ error.message }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  V1CreateItemRequest,
  V1StackBalancingMethod
} from "@/../vendor/economy-client/api.ts";

@Component
export default class CreateItem extends Vue {
  public v1StackBalancingMethod = V1StackBalancingMethod;

  public item: V1CreateItemRequest = {
    name: "",
    stackable: false,
    stackMaxAmount: "0",
    stackBalancingMethod: V1StackBalancingMethod.DEFAULT,
    metadata: "{}"
  };

  public error = null;

  public handleClickCreateItem(): void {
    if (this.item.name.length === 0) {
      alert("Please enter an item name.");
      return;
    }

    try {
      JSON.parse(this.item.metadata);
    } catch (err) {
      this.error = {
        message: "Unable to parse metadata"
      };
    }

    this.$economyService
      .createItem({
        ...this.item
      })
      .then(() => {
        this.$router.push({
          name: "item"
        });
      })
      .catch(error => {
        error.then(err => {
          this.error = err;
        });
      });
  }

  get stackBalancingMethods() {
    return Object.values(this.v1StackBalancingMethod)
      .filter((method: string) => method.includes("_") || method === "DEFAULT")
      .filter((v, i, s) => s.indexOf(v) === i);
  }
}
</script>
