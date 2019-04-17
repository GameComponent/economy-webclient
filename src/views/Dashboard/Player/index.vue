<template>
  <div class="p-16">
    <h1>Players</h1>

    <table class="gc-table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.id }}</td>
          <td>
            <router-link
              :to="{
                name: 'dashboard-player-detail',
                params: {
                  id: player.id,
                },
              }"
            >
              View
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4">
      <gc-button-link
        :to="{
          name: 'dashboard-player-new',
        }"
      >
        Create new player
      </gc-button-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Player extends Vue {
  public players = [];

  public mounted() {
    this.$economyService.listPlayer()
      .then(({ players }) => {
        this.players = players;
      });
  }
}
</script>
