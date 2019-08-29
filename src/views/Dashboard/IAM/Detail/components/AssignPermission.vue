<template>
  <div>
    <input v-model="permission" type="text" class="gc-input" />
    <button class="gc-button ml-3" @click="onClickAttachRole">Assign permission</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class AssigfnPermission extends Vue {
  public permission = "";
  @Prop(String) readonly accountId: string;

  public onClickAttachRole() {
    this.$economyService
      .assignPermission({
        accountId: this.accountId,
        permission: this.permission
      })
      .then(() => {
        this.$router.go(this.$router.currentRoute as any);
      });
  }
}
</script>
