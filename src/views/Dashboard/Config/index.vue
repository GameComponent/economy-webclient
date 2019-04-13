<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Config</h1>

    <table class="gc-table">
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="config in configs" :key="config.key">
          <td>{{ config.key }}</td>
          <td>
            <textarea cols="30" rows="10">{{ config.value }}</textarea>
          </td>
          <td>
            Update
          </td>
        </tr>
      </tbody>
    </table>

    <div style="margin-top: 3rem;">
      <h2>Create new config</h2>
      <table>
        <tr>
          <td>
            Key:
          </td>
          <td>
            <input
              v-model="config.key"
              type="text"
            >
          </td>
        </tr>
        <tr>
          <td>Value:</td>
          <td>
            <!-- <textarea v-model="config.value" cols="30" rows="10"></textarea> -->
          </td>
        </tr>
      </table>
      <button @click="onClickCreateConfig">Create</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Config extends Vue {
  public configs = [];
  public config = {
    key: '',
    value: {},
  };

  public mounted() {
    this.$economyService.listConfig()
      .then(({ configs }) => {
        this.configs = configs;
      });
  }

  public onClickCreateConfig() {
    this.$economyService.setConfig(this.config)
      .then((result) => {
        console.log('result', result);
      });
  }

}
</script>
