<style scoped lang="scss">
.btn {
  display: inline-block;
  background-color: #38c172;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
}

.btn:hover {
  background-color: #249d57;
  transition: .2s;
}
</style>

<template>
  <router-link
    class="btn"
    :to="to"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GcButtonLink extends Vue {
  @Prop() private to!: object;
}
</script>
