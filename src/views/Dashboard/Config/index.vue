<style>
  .CodeMirror {
    border: 1px solid #eee;
    height: auto;
    border-radius: 3px;
  }
</style>

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
          <td style="width: 300px;">
            <codemirror
              :value="JSON.stringify(config.value, null, 2)"
            ></codemirror>
          </td>
          <td>
            Update
          </td>
        </tr>
      </tbody>
    </table>

    <div style="margin-top: 3rem;">
      <h2>Create new config</h2>
      <table style="width: 100%;">
        <tr>
          <td>
            Key:
          </td>
          <td>
            <input
              v-model="key"
              class="gc-input"
              type="text"
              placeholder="Key"
            >
          </td>
        </tr>
        <tr>
          <td>Value:</td>
          <td>
            <codemirror
              v-model="value"
            ></codemirror>
          </td>
        </tr>
      </table>

      <button
        @click="onClickCreateConfig"
        :disabled="!valueObject"
        class="gc-button"
        :class="{ 'gc-button--disabled': !valueObject }"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Config extends Vue {
  public configs: Array<any> = [];
  public key: string = '';
  public value: string = '';

  public mounted() {
    this.$economyService.listConfig()
      .then(({ configs }) => {
        this.configs = configs;
      });
  }

  public onClickCreateConfig() {
    this.$economyService.setConfig({
      key: this.key,
      value: this.valueObject,
    })
      .then((result) => {
        this.$router.push({
          name: 'dashboard-config',
        });
      });
  }

  get valueObject() {
    try {
      return JSON.parse(this.value);
    } catch(e) {
      return null;
    }

    return null;
  }
}
</script>
