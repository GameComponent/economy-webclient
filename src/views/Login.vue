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
        <input v-model="loginForm.email" class="gc-input" type="email" placeholder="email" />
      </div>

      <div class="mt-2">
        <input v-model="loginForm.password" class="gc-input" type="password" placeholder="password" />
      </div>

      <button @click="onClickLogin" class="gc-button mt-4">Login</button>
      <span class="p-3 mx-1 text-xs font-medium text-gray-700">OR</span>
      <router-link
        :to="{ name: 'register' }"
        class="p-3 pl-0 font-medium hover:text-green-500"
      >Register</router-link>

      <div v-if="error && error.message && error.code">{{ error.message}} [{{ error.code }}]</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EconomyService from "@/services/EconomyService";

@Component
export default class Login extends Vue {
  public loginForm = {
    email: "",
    password: ""
  };

  public error = null;

  public mounted(): void {
    if (localStorage.getItem("token")) {
      this.$router.push({
        name: "dashboard-index"
      });
    }

    if (this.$route.query.reason) {
      this.error = {
        message: "Unable to connect to server",
        code: "no status code"
      };
    }
  }

  public onClickLogin(): void {
    this.$economyService
      .authenticate(this.loginForm)
      .then(({ accessToken, refreshToken }) => {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);

        this.$router.push({
          name: "dashboard-index"
        });
      })
      .catch(errorResponse => {
        // Get the JSON from the error
        errorResponse.json().then(error => {
          this.error = error;
        });
      });
  }
}
</script>
