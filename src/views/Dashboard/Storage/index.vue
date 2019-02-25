<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Storages</h1>

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
        <tr v-for="storage in storages" :key="storage.id">
          <td>{{ storage.id }}</td>
          <td>{{ storage.name }}</td>
          <td>{{ new Date(storage.createdAt).toLocaleString() }}</td>
          <td>{{ new Date(storage.updatedAt).toLocaleString() }}</td>
          <td>
            <router-link
              :to="{
                name: 'dashboard-storage-detail',
                params: {
                  id: storage.id,
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
        name: 'dashboard-storage-new',
      }"
    >
      Create new storage
    </gc-button-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Storage extends Vue {
  public storages = [];
}
</script>
