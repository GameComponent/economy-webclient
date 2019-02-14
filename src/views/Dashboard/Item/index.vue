<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Items</h1>

    <table style="text-align: left;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>
            <router-link
              :to="{
                name: 'dashboard-item-detail',
                params: {
                  id: 'kaas',
                },
              }"
            >
              View
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <router-link
      :to="{
        name: 'dashboard-item-new',
      }"
    >
      Create new item
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
  items = [];

  mounted() {
    fetch('http://localhost:8888/v1/items')
      .then(res => res.json())
      .then((data) => {
        this.items = data.items;
      });
  }
}
</script>
