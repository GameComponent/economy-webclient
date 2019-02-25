<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Item</h1>
    <pre>{{ JSON.stringify(item, null, 2) }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
  public item = null;

  public mounted() {
    this.$economyService.getItem(this.$route.params.id)
      .then(({ item }) => {
        this.item = item;
      });
  }
}
</script>
