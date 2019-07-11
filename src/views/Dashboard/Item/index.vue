<template>
  <div class="p-16">
    <h1>Items</h1>

    <table class="gc-table text-left mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Created at</th>
          <th>Updated at</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ new Date(item.createdAt).toLocaleString() }}</td>
          <td>{{ new Date(item.updatedAt).toLocaleString() }}</td>
          <td>
            <router-link
              :to="{
                name: 'item-detail',
                params: {
                  itemId: item.id,
                },
              }"
            >View</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4">
      <gc-button-link :to="{
          name: 'item-new',
        }">Create new item</gc-button-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Item extends Vue {
  public items = [];

  public mounted() {
    this.$economyService.listItem().then(({ items }) => {
      this.items = items;
    });
  }
}
</script>
