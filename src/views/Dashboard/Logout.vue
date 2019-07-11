<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Logout extends Vue {
  public mounted(): void {
    localStorage.removeItem("token");
    window.location.href = window.location.origin;
  }
}
</script>
