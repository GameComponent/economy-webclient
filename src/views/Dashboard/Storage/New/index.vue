<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Create new storage</h1>

    <div>
      <table>
        <tr>
          <td>Name:</td>
          <td>
            <input type="text" v-model="storage.name">
          </td>
        </tr>
        <tr>
          <td>player id:</td>
          <td>
            <input type="text" v-model="storage.playerId">
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button @click="handleClickCreateStorage">
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
