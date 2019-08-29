<template>
  <div class="p-16">
    <h1>Identity and Access Management</h1>
    <table class="gc-table text-left mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.id">
          <td>{{ account.id }}</td>
          <td>{{ account.email }}</td>
          <td>
            <router-link
              :to="{
                name: 'iam-detail',
                params: {
                  accountId: account.id,
                },
              }"
            >View</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4">
      <gc-button-link :to="{
        name: 'iam-new',
      }">Create new account</gc-button-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class IAM extends Vue {
  public accounts = [];
  public mounted() {
    this.$economyService.listAccount().then(({ accounts }) => {
      this.accounts = accounts;
    });
  }
}
</script>
