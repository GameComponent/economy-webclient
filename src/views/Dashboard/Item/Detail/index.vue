<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Item</h1>

    <!-- Give item -->
    <div>
      <h2>Give item</h2>
      <give-item :itemId="$route.params.id" />
    </div>

    <!-- Raw item -->
    <div>
      <h2>Raw item</h2>
      <pre class="gc-pre">{{ JSON.stringify(item, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GiveItem from '@/components/GiveItem/index.vue';

@Component({
  components: {
    GiveItem,
  },
})
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
