<template>
  <div>
    <div style="background-color: #F2F5F7; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
      <div style="padding-left: 20px; padding-top: 5px; padding-bottom: 10px;">
        <input
          class="gc-input"
          type="text"
          v-model="query"
          placeholder="Search player"
        >
        <button
          class="gc-button"
          style="padding: 5px; margin-left: 10px;"
          @click="handleClickSearch"
        >
          Search
        </button>
      </div>
      <table class="gc-table" v-if="indices && indices.length > 0">
        <thead>
          <tr>
            <th>Players</th>
            <th>Storages</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in indices" :key="index">
            <td>
              <input
                v-if="players[index]"
                type="radio"
                name="selectedPlayer"
                :value="players[index].id"
                v-model="selectedPlayer"
              >
              <span v-if="players[index]">{{ players[index].name }}</span>
              <span v-if="players[index]" class="gc-table__description">
                ({{ players[index].id }})
              </span>
            </td>
            <td style="text-align: left;">
              <input
                v-if="storages[index]"
                type="radio"
                name="selectedStorage"
                :value="storages[index].id"
                v-model="selectedStorage"
              >
              <span v-if="storages[index]">{{ storages[index].name }}</span>
              <span v-if="storages[index]" class="gc-table__description">
                ({{ storages[index].id }})
              </span>
            </td>
          </tr>
        </tbody>

        <tfoot v-if="selectedStorage">
          <tr>
            <td style="padding-left: 20px; padding-bottom: 10px;">
              <button
                class="gc-button"
                @click="handleClickGiveItem"
              >
                Give item
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class SearchPlayerStorage extends Vue {
  public query: string = '';
  public players = [];
  public selectedPlayer = null;
  public selectedStorage = null;
  public storages = [];

  public handleClickSearch() {
    this.reset();

    this.$economyService.searchPlayer({
      query: this.query,
    })
      .then(({ players }) => {
        console.log('player search results: ', players);
        this.players = players;
      });
  }

  get indices() {
    if (this.players.length > this.storages.length) {
      return Array.from(Array(this.players.length).keys());
    }

    return Array.from(Array(this.storages.length).keys());
  }

  public reset() {
    this.selectedPlayer = null;
    this.selectedStorage = null
    this.storages = [];
  }

  public handleClickGiveItem() {
    this.$emit('input', {
      storageId: this.selectedStorage,
    });
  }

  @Watch('selectedPlayer')
  handleSelectedPlayerChanged() {
    this.$economyService.getPlayer(this.selectedPlayer)
      .then(({ player }) => {
        this.storages = player.storages || [];
      });
  }
}
</script>
