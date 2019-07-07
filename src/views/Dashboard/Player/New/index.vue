<template>
  <div class="p-16">
    <h1>Create new player</h1>

    <div class="mt-4">
      <table>
        <tr>
          <td>ID:</td>
          <td>
            <input v-model="player.id" type="text" class="gc-input" />
          </td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>
            <input v-model="player.name" type="text" class="gc-input" />
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <button @click="handleClickCreatePlayer" class="gc-button">Create</button>
          </td>
        </tr>

        <tr v-if="error">
          <td></td>
          <td>
            <div class="bg-red-500 text-white rounded p-3">
              <span class="font-semibold">Error:</span> a player with a same ID already exists.
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreatePlayer extends Vue {
  public player = {
    id: "",
    name: ""
  };

  public error = null;

  public handleClickCreatePlayer(): void {
    if (this.player.name.length === 0) {
      alert("Please enter a player name.");
      return;
    }

    if (this.player.id.length === 0) {
      alert("Please enter a player_id.");
      return;
    }

    this.$economyService
      .createPlayer(this.player)
      .then(({ player }) => {
        this.$router.push({
          name: "dashboard-player-detail",
          params: {
            playerId: player.id
          }
        });
      })
      .catch(error => {
        this.error = error;
      });
  }
}
</script>
