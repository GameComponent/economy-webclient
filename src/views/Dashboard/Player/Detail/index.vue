<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Player</h1>

    <div v-if="player && player.storages">
      <h2>Storages</h2>
      <table class="gc-table">
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
    </div>
    <div>
      <h2>Raw</h2>
      <pre class="gc-pre">{{ JSON.stringify(player, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Player extends Vue {
  public player = null;

  public mounted() {
    this.$economyService.getPlayer(this.$route.params.id)
      .then(({ player }) => {
        this.player = player;
      });
  }
}
</script>
