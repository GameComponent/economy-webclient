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
      <h1>Register</h1>

      <div class="mt-4">
        <input v-model="registerForm.email" class="gc-input" type="email" placeholder="email" />
      </div>

      <div class="mt-2">
        <input
          v-model="registerForm.password"
          class="gc-input"
          type="password"
          placeholder="password"
        />
      </div>

      <div class="mt-2">
        <input
          v-model="registerForm.repeat"
          class="gc-input"
          type="password"
          placeholder="Repeat password"
        />
      </div>

      <router-link :to="{ name: 'login' }" class="p-3 pl-0 font-medium hover:text-green-500">Back</router-link>
      <span class="p-3 mx-1 text-xs font-medium text-gray-700">OR</span>
      <button @click="onClickRegister" class="gc-button mt-4 ml-4">Register</button>

      <div v-if="error && error.message && error.code">{{ error.message}} [{{ error.code }}]</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EconomyService from "@/services/EconomyService";

@Component
export default class Register extends Vue {
  public registerForm = {
    email: "",
    password: "",
    repeat: ""
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

  public onClickRegister(): void {
    if (this.registerForm.password !== this.registerForm.repeat) {
      this.error = {
        message: "Passwordst  do not match",
        code: "no status code"
      };
      return;
    }

    this.$economyService
      .register(this.registerForm)
      .then(({ token }) => {
        localStorage.setItem("token", token);

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
