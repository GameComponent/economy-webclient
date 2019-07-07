<template>
  <div class="p-16">
    <h1>Storage</h1>

    <!-- Storage Items -->
    <div v-if="storage && storage.items" class="mt-4">
      <h2>Items</h2>

      <div v-if="storage.items.length === 0" class="mt-4">Sorry, no items found in the storage</div>

      <table class="gc-table mt-4" v-if="storage.items.length > 0">
        <thead>
          <tr>
            <th>Unique ID</th>
            <th>Item</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="storageItem in storage.items" :key="storageItem.id">
            <td>{{ storageItem.id }}</td>
            <td>
              <div>{{ storageItem.item.name }}</div>
              <div class="gc-table__description">({{ storageItem.item.id }})</div>
            </td>
            <td>
              <div>
                <span v-if="storageItem.amount">{{ storageItem.amount }}</span>
                <span
                  v-else
                  class="font-medium text-white text-xs bg-gray-600 rounded-lg px-2 tracking-wider"
                >UNSTACKABLE</span>
              </div>
            </td>
            <td>
              <a href>Remove</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Storage Currencies -->
    <div v-if="storage && storage.currencies" class="mt-8">
      <h2>Currencies</h2>

      <div
        v-if="storage.currencies.length === 0"
        class="mt-4"
      >Sorry, no currencies found in the storage</div>

      <table class="gc-table mt-4" v-if="storage.currencies.length > 0">
        <thead>
          <tr>
            <th>Unique ID</th>
            <th>Currency</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="storageCurrency in storage.currencies" :key="storageCurrency.id">
            <td>{{ storageCurrency.id }}</td>
            <td>
              <div>{{ storageCurrency.currency.name }}</div>
              <div class="gc-table__description">({{ storageCurrency.currency.id }})</div>
            </td>
            <td>{{ storageCurrency.amount }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Give item -->
    <div v-if="storage" class="mt-8">
      <h2>Give item</h2>

      <div class="mt-4">
        <give-item :storageId="this.$route.params.storageId"></give-item>
      </div>
    </div>

    <!-- Give currency -->
    <div v-if="storage" class="mt-8">
      <h2>Give currency</h2>

      <div class="mt-4">
        <give-currency :storageId="this.$route.params.storageId"></give-currency>
      </div>
    </div>

    <!-- Raw storage -->
    <div v-if="storage" class="mt-8">
      <h2>Raw storage</h2>
      <pre class="gc-pre">{{ JSON.stringify(storage, null, 2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GiveItem from "@/components/GiveItem/index.vue";
import GiveCurrency from "@/components/GiveCurrency/index.vue";

@Component({
  components: {
    GiveItem,
    GiveCurrency
  }
})
export default class Storage extends Vue {
  public storage = null;

  public mounted() {
    this.$economyService
      .getStorage(this.$route.params.storageId)
      .then(({ storage }) => {
        this.storage = storage;
      });
  }
}
</script>
