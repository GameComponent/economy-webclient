<template>
  <div>
    <table>
      <tr>
        <td>Item id:</td>
        <td>
          <input
            class="gc-input"
            type="text"
            v-model="request.itemId"
           >
        </td>
      </tr>
      <tr>
        <td>Storage id:</td>
        <td>
          <input
            class="gc-input"
            type="text"
            v-model="request.storageId"
          >
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button @click="handleClickGiveItem" class="gc-button">
            Give item
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { V1GiveItemRequest } from '@/../vendor/economy-client/api.ts';

@Component
export default class GiveItem extends Vue {
  @Prop() private itemId: string;
  @Prop() private storageId: string;

  public request: V1GiveItemRequest = {
    itemId: '',
    storageId: '',
  };

  public mounted() {
    this.request.itemId = this.itemId;
    this.request.storageId = this.storageId;
  }

  public handleClickGiveItem() {
    console.log('giveItem', this.request);
    this.$economyService.giveItem(this.request)
      .then(() => {
        this.$router.go(this.$router.currentRoute);
      });
  }
}
</script>
