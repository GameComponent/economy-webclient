<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Items</h1>

    <table style="text-align: left;" class="gc-table">
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
                name: 'dashboard-item-detail',
                params: {
                  id: item.id,
                },
              }"
            >
              View
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <gc-button-link
      :to="{
        name: 'dashboard-item-new',
      }"
    >
      Create new item
    </gc-button-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
  public items = [];

  public mounted() {
    this.$economyService.listItem()
      .then(({ items }) => {
        this.items = items;
      });
  }
}
</script>
