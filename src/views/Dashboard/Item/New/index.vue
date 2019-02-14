<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Create new item</h1>

    <div>
      <input type="text" v-model="item.name">
    </div>

    <div>
      <button @click="handleClickCreateItem">
        Create
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CreateItem extends Vue {
  item = {
    name: '',
  }

  handleClickCreateItem(): void {
    console.log(this.item);

    if (this.item.name.length === 0) {
      alert('Please enter an item name.')
      return;
    }

    fetch('http://localhost:8888/v1/item', {
      method: 'POST',
      body: JSON.stringify({
        api: 'v1',
        ...this.item,
      }),
    })
      .then(() => {
        this.$router.push({
          name: 'dashboard-item',
        });
      });
  };
}
</script>
