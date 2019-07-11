<template>
  <div class="p-16">
    <h1>Dashboard</h1>
    <div class="mt-4">Welcome to the Economy service.</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import EconomyService from "@/services/EconomyService";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
