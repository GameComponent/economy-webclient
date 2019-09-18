<template>
  <div class="p-16">
    <h1>Account</h1>

    <pre class="gc-pre mt-4">{{ JSON.stringify(account, null, 2) }}</pre>

    <!-- Permission -->
    <div class="mt-4" v-if="permissions.length > 0">
      <h2>Permission</h2>
      <table class="gc-table text-left mt-4">
        <thead>
          <tr>
            <th>Permission</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="permission in permissions" :key="permission">
            <td>{{ permission }}</td>
            <td>
              <button
                @click="onClickRevokePermission(permission)"
                class="text-red-500 font-medium"
              >Revoke</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Assign permission -->
    <div class="mt-4">
      <h2>Assign permission</h2>
      <div class="mt-2">
        <assign-permission :accountId="account.id"></assign-permission>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AssignPermission from "./components/AssignPermission.vue";

@Component({
  components: {
    AssignPermission
  }
})
export default class IAMDetail extends Vue {
  public account = null;

  public mounted() {
    this.$economyService
      .getAccount(this.$route.params.accountId)
      .then(({ account }) => {
        this.account = account;
      });
  }

  public onClickRevokePermission(permission) {
    this.$economyService
      .revokePermission({
        accountId: this.account.id,
        permission
      })
      .then(() => {
        this.$router.go(this.$router.currentRoute as any);
      });
  }

  get permissions() {
    if (!this.account) return [];
    if (!this.account.permissions) return [];

    return this.account.permissions;
  }
}
</script>
