<template>
  <div class="p-16">
    <h1>Create new item</h1>

    <div class="mt-4">
      <input
        v-model="item.name"
        type="text"
        class="gc-input"
        placeholder="Item name"
      >
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

@Component
export default class CreateItem extends Vue {
  public item = {
    name: '',
  };

  public handleClickCreateItem(): void {
    console.log(this.item);

    if (this.item.name.length === 0) {
      alert('Please enter an item name.');
      return;
    }

    // fetch('http://localhost:8888/v1/item', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     api: 'v1',
    //     ...this.item,
    //   }),
    // })
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
