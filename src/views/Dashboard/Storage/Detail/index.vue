<template>
  <div style="padding: 3rem;">
    <h1 style="margin-top: 0;">Storage</h1>

    <!-- Storage Items -->
    <div v-if="storage && storage.items">
      <h2>Items</h2>

      <div v-if="storage.items.lenght === 0">
        Sorry, no items found in the storage
      </div>

      <table class="gc-table" v-if="storage.items.length > 0">
        <thead>
          <tr>
            <th>Unique ID</th>
            <th>Item ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="storageItem in storage.items" :key="storageItem.id">
            <td>{{ storageItem.id }}</td>
            <td>{{ storageItem.item.id }}</td>
            <td>{{ storageItem.item.name }}</td>
            <td>
              <a href="">Remove</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <pre class="gc-pre">{{ JSON.stringify(storage, null, 2) }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Storage extends Vue {
  public storage = null;

  public mounted() {
    this.$economyService.getStorage(this.$route.params.id)
      .then(({ storage }) => {
        this.storage = storage;
      });
  }
}
</script>
