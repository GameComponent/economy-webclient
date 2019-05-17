<template>
  <div>
    <search-player-storage
      v-if="!storageId || storageId === ''"
      @input="handleInputPlayerStorage"
    />
    <search-item
      v-if="!itemId || itemId === ''"
      @input="handleInputItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { V1GiveItemRequest } from '@/../vendor/economy-client/api.ts';
import SearchPlayerStorage from './components/SearchPlayerStorage.vue';
import SearchItem from './components/SearchItem.vue';

@Component({
  components: {
    SearchPlayerStorage,
    SearchItem,
  },
})
export default class GiveItem extends Vue {
  @Prop() private itemId: string;
  @Prop() private storageId: string;

  public request: V1GiveItemRequest = {
    itemId: '',
    storageId: '',
    amount: 1,
  };

  public mounted() {
    this.request.itemId = this.itemId;
    this.request.storageId = this.storageId;
  }

  public handleInputPlayerStorage({ storageId, amount = 1 }) {
    this.request.storageId = storageId;
    this.request.amount = amount;
    console.log('giveItem', this.request);

    this.$economyService.giveItem(this.request)
      .then(() => {
        this.$router.go(this.$router.currentRoute);
      });
  }

  public handleInputItem({ itemId, amount = 1 }) {
    this.request.itemId = itemId;
    this.request.amount = amount;
    console.log('giveItem', this.request);

    this.$economyService.giveItem(this.request)
      .then(() => {
        this.$router.go(this.$router.currentRoute);
      });
  }
}
</script>
