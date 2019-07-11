<template>
  <router-link class="gc-button" :to="to">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GcButtonLink extends Vue {
  @Prop() private to!: object;
}
</script>
