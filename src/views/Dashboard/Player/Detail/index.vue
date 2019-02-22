<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Player</h1>
    <div>
      {{ player}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Player extends Vue {
  public player = null;

  public mounted() {
    fetch(`http://localhost:8888/v1/player/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.player = data;
      });
  }
}
</script>