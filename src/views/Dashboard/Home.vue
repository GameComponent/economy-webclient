<template>
  <div style="padding: 3rem;">
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import EconomyService from '@/services/EconomyService';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
