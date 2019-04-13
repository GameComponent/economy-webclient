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
    <div style="padding: 3rem;">
      <h1>Login</h1>

      <div>
        <input
          v-model="loginForm.email"
          class="gc-input"
          type="email"
          placeholder="email"
        >
      </div>

      <div>
        <input
          v-model="loginForm.password"
          class="gc-input"
          type="password"
          placeholder="password"
        >
      </div>

      <button @click="onClickLogin" class="gc-button">
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
