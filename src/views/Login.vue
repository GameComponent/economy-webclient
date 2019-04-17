<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <div class="wrapper">
    <div class="p-16">
      <h1>Login</h1>

      <div class="mt-4">
        <input
          v-model="loginForm.email"
          class="gc-input"
          type="email"
          placeholder="email"
        >
      </div>

      <div class="mt-2">
        <input
          v-model="loginForm.password"
          class="gc-input"
          type="password"
          placeholder="password"
        >
      </div>

      <button @click="onClickLogin" class="gc-button mt-4">
        Login
      </button>

      <div v-if="error && error.message && error.code">
        {{ error.message}} [{{ error.code }}]
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EconomyService from '@/services/EconomyService';

@Component
export default class Login extends Vue {
  public loginForm = {
    email: '',
    password: '',
  };

  public error = null;

  public mounted(): void {
    if (localStorage.getItem('token')) {
      this.$router.push({
        name: 'dashboard-home',
      });
    }

    if (this.$route.query.reason) {
      this.error = {
        message: 'Unable to connect to server',
        code: 'no status code',
      };
    }
  }

  public onClickLogin(): void {
    this.$economyService.authenticate({
      api: 'v1',
      ...this.loginForm,
    })
      .then(({ token }) => {
        localStorage.setItem('token', token);

        this.$router.push({
          name: 'dashboard-home',
        });
      })
      .catch((errorResponse) => {
        // Get the JSON from the error
        errorResponse.json()
          .then((error) => {
            this.error = error;
          });
      });
  }
}
</script>
