<template>
  <div class="p-16">
    <h1>Storages</h1>

    <table class="gc-table text-left mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Player id</th>
          <th>Created at</th>
          <th>Updated at</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="storage in storages" :key="storage.id">
          <td>{{ storage.id }}</td>
          <td>{{ storage.name }}</td>
          <td>{{ storage.playerId }}</td>
          <td>{{ new Date(storage.createdAt).toLocaleString() }}</td>
          <td>{{ new Date(storage.updatedAt).toLocaleString() }}</td>
          <td>
            <router-link
              :to="{
                name: 'storage-detail',
                params: {
                  storageId: storage.id,
                },
              }"
            >View</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4">
      <gc-button-link :to="{
          name: 'storage-new',
        }">Create new storage</gc-button-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Storage extends Vue {
  public storages = [];

  public mounted() {
    this.$economyService.listStorage().then(({ storages }) => {
      this.storages = storages;
    });
  }
}
</script>
