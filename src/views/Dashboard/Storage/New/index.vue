<template>
  <div class="p-16">
    <h1>Create new storage</h1>

    <div class="mt-4">
      <table>
        <tr>
          <td>Name:</td>
          <td>
            <input
              v-model="storage.name"
              type="text"
              class="gc-input"
            >
          </td>
        </tr>
        <tr>
          <td>player id:</td>
          <td>
            <input
              v-model="storage.playerId"
              type="text"
              class="gc-input"
            >
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button @click="handleClickCreateStorage" class="gc-button">
              Create
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CreateStorage extends Vue {
  public storage = {
    name: '',
    playerId: '',
  };

  public mounted(): void {
    if (!this.$route.query.playerId) return;

    this.storage.playerId = String(this.$route.query.playerId);
  }

  public handleClickCreateStorage(): void {
    if (this.storage.name.length === 0) {
      alert('Please enter an storage name.');
      return;
    }

    if (this.storage.playerId.length === 0) {
      alert('Please enter an player_id name.');
      return;
    }

    this.$economyService.createStorage(this.storage)
      .then(() => {
        this.$router.push({
          name: 'dashboard-player-detail',
          params: {
            id: this.storage.playerId,
          },
        });
      });
  }
}
</script>
