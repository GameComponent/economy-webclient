<template>
  <div style="padding: 2rem;">
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import EconomyService from '@/services/EconomyService';

const item = EconomyService.getItem('6be8855b-d247-4226-9a6f-9aa280957c33');
console.log('item', item);

const items = EconomyService.listItems();
console.log('items', items);

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
