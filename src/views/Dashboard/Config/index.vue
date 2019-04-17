<style>
  .CodeMirror {
    border: 1px solid #eee;
    height: auto;
    border-radius: 3px;
  }
</style>

<template>
  <div class="p-16">
    <h1>Config</h1>

    <table class="gc-table mt-4">
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
            <codemirror
              :value="JSON.stringify(config.value, null, 2)"
              @input="(value) => { onInputConfig(config.key, value); }"
            ></codemirror>
          </td>
          <td>
            <span v-if="editedConfigs[config.key]">
              <a href="#" @click="onClickUpdateConfig(config.key)">
                Update
              </a>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Create new config -->
    <div class="mt-8">
      <h2>Create new config</h2>

      <table class="w-full mt-4">
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
        <tr>
          <td></td>
          <td>
            <button
              @click="onClickCreateConfig"
              :disabled="!valueObject"
              class="gc-button"
              :class="{ 'gc-button--disabled': !valueObject }"
            >
              Create
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Config extends Vue {
  public configs: Array<any> = [];
  public editedConfigs = {};
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
        this.$router.go(0);
      });
  }

  public onInputConfig(key, value) {
    if (this.editedConfigs[key]) {
      this.editedConfigs[key].value = value;
      return;
    }

    this.$set(this.editedConfigs, key, { key, value });
  }

  public onClickUpdateConfig(key) {
    const config = this.editedConfigs[key];

    // Parse the value to an object
    let valueObject = null;
    try {
      valueObject = JSON.parse(config.value);
    } catch(e) {
      return null;
    }

    // Check if the object is valid
    if (!valueObject) {
      alert('Invalid value');
      return;
    }

    // Set the new config and force a page refresh
    this.$economyService.setConfig({
      key: config.key,
      value: valueObject,
    })
      .then((result) => {
        this.$router.go(0);
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
