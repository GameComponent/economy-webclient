<template>
  <div class="p-16">
    <h1>Player</h1>

    <div v-if="player && player.storages" class="mt-4">
      <h2>Storages</h2>
      <table class="gc-table mt-4">
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
          <tr v-for="storage in player.storages" :key="storage.id">
            <td>{{ storage.id }}</td>
            <td>{{ storage.name }}</td>
            <td>{{ storage.createdAt }}</td>
            <td>{{ storage.updatedAt }}</td>
            <td>
              <router-link
                :to="{
                  name: 'dashboard-storage-detail',
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
        <gc-button-link
          :to="{
            name: 'dashboard-storage-new',
            query: {
              playerId: this.player.id,
            },
          }"
        >Create new storage</gc-button-link>
      </div>
    </div>

    <div class="mt-8">
      <h2>Raw</h2>
      <pre class="gc-pre mt-4">{{ JSON.stringify(player, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Player extends Vue {
  public player = null;

  public mounted() {
    this.$economyService
      .getPlayer(this.$route.params.playerId)
      .then(({ player }) => {
        this.player = player;
      });
  }
}
</script>
