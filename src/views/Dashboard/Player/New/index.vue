<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Create new player</h1>

    <div>
      <table>
        <tr>
          <td>Id:</td>
          <td>
            <input
              v-model="player.id"
              type="text"
              class="gc-input"
            >
          </td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>
            <input
              v-model="player.name"
              type="text"
              class="gc-input"
            >
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button @click="handleClickCreatePlayer" class="gc-button">
              Create
            </button>
          </td>
        </tr>
      </table>

      <div v-if="error">
        A player with a same ID already exists.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CreatePlayer extends Vue {
  public player = {
    id: '',
    name: '',
  };

  public error = null;

  public handleClickCreatePlayer(): void {
    if (this.player.name.length === 0) {
      alert('Please enter a player name.');
      return;
    }

    if (this.player.id.length === 0) {
      alert('Please enter a player_id.');
      return;
    }

    this.$economyService.createPlayer(this.player)
      .then(({ player }) => {
        this.$router.push({
          name: 'dashboard-player-detail',
          params: {
            id: player.id,
          },
        });
      })
      .catch((error) => {
        this.error = error;
      });
  }
}
</script>
