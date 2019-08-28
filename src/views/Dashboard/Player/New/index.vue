<template>
  <div class="p-16">
    <h1>Create new player</h1>

    <div class="mt-4">
      <table class="w-full">
        <tr>
          <td>ID:</td>
          <td>
            <input v-model="player.playerId" type="text" class="gc-input" />
          </td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>
            <input v-model="player.name" type="text" class="gc-input" />
          </td>
        </tr>
        <tr>
          <td>Metadata:</td>
          <td>
            <codemirror v-model="player.metadata"></codemirror>
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
          <td v-if="error.code === 10">
            <div class="bg-red-500 text-white rounded p-3">
              <span class="font-semibold">Error:</span> a player with a same ID already exists.
            </div>
          </td>
          <td v-else>
            <div class="bg-red-500 text-white rounded p-3">
              <span class="font-semibold">Error:</span>
              &nbsp;
              <span>{{ error.message }}</span>
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
    playerId: "",
    name: "",
    metadata: "{}"
  };

  public error = null;

  public handleClickCreatePlayer(): void {
    if (this.player.name.length === 0) {
      alert("Please enter a player name.");
      return;
    }

    if (this.player.playerId.length === 0) {
      alert("Please enter a player_id.");
      return;
    }

    // Check if the user entered correct metadata
    try {
      JSON.parse(this.player.metadata);
    } catch (e) {
      this.error = {
        message: "Unable to parse metadata JSON object"
      };
      return;
    }

    this.$economyService
      .createPlayer(this.player)
      .then(({ player }) => {
        this.$router.push({
          name: "player-detail",
          params: {
            playerId: player.id
          }
        });
      })
      .catch(error => {
        error.json().then(err => {
          this.error = err;
        });
      });
  }
}
</script>
