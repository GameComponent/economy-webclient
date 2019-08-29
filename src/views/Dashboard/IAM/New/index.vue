<template>
  <div class="p-16">
    <h1>Create new account</h1>

    <div>
      <p class="pt4">
        <b class="gc-label-title">Email</b>
        <br />
        <input type="text" v-model="account.email" class="gc-input" />
      </p>

      <p class="pt4">
        <b class="gc-label-title">Password</b>
        <br />
        <input type="password" v-model="account.password" class="gc-input" />
      </p>

      <button @click="handleClickCreateAccount" class="gc-button mt-4">Create</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CreateAccount extends Vue {
  public account = {
    email: "",
    password: ""
  };

  public handleClickCreateAccount(): void {
    if (this.account.email.length === 0) {
      alert("Please enter the email.");
      return;
    }

    if (this.account.password.length === 0) {
      alert("Please enter the password.");
      return;
    }

    this.$economyService.register(this.account).then(() => {
      this.$router.push({
        name: "iam"
      });
    });
  }
}
</script>

