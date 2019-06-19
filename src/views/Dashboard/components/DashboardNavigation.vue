<style lang="scss">
.sidenav {
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  position: fixed;
  overflow-y: auto;
  transform: translateX(-245px);
  transition: all 0.15s ease-in-out;
  z-index: 2; /* Needs to sit above the hamburger menu icon */
  background-color: #fff;
  border-left: 5px solid #38c172;
  border-right: 1px solid #eee;
  min-height: 12 * 60px;
}

.sidenav.active {
  transform: translateX(0);
}

.sidebar__top {
  flex: 0 0 60px;
  height: 60px;
  line-height: 60px;
  width: 100%;
  font-weight: bold;
  border-bottom: 1px solid #f8f8f8;
}

.sidebar__top-title {
  margin-left: 40px;
}

.sidebar__top-version {
  font-size: 10px;
  color: #1b655e;
  background-color: #e3fcec;
  padding: 3px;
  border-radius: 5px;
  padding-left: 6px;
  padding-right: 6px;
}

.sidenav__close-icon {
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;
}

.sidenav__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  flex: 1;
}

.sidenav__list--bottom {
  flex: 1;
  // position: absolute;
  // bottom: 0;
}

.sidenav__list-item {
  text-align: left;
  height: 60px;
  line-height: 60px;
}

.sidenav__list-item:hover.sidebar__list-item--disabled {
  background-color: transparent;
  cursor: default;
}
.sidenav__list-item.sidebar__list-item--disabled a {
  color: #a8eeeb;
  fill: #a8eeeb;
  cursor: default;
}

.sidenav__list-item.sidebar__list-item--disabled a:hover {
  color: #a8eeeb;
  fill: #a8eeeb;
}

.sidenav__list-item a {
  padding-left: 40px;
  display: block;
  text-decoration: none;
  font-weight: 600;
  color: #1b655e;
  fill: #1b655e;
}

.sidenav__list-item a svg {
  display: inline-block;
  vertical-align: baseline;
  transform: translateY(5px);
  margin-right: 20px;
}

.sidenav__list-item a.router-link-active {
  color: #38c172;
  fill: #38c172;
}

.sidenav__list-item a:hover {
  color: #187741;
  fill: #187741;
  transition: 0.1s;
}

.sidenav__list-item:hover {
  background-color: rgba(238, 145, 145, 0.2);
  cursor: pointer;
}

/* Non-mobile styles, 750px breakpoint */
@media only screen and (min-width: 46.875em) {
  .sidenav {
    // position: relative;
    transform: translateX(0);
  }

  .sidenav__close-icon {
    visibility: hidden;
  }

  .sidenav__list-item--desktop-hidden {
    display: none;
  }
}
</style>

<template>
  <aside class="sidenav" :class="{ 'active': open }">
    <!-- Title bar -->
    <div class="sidebar__top">
      <span class="sidebar__top-title">Economy Service</span>
      <span class="sidebar__top-version">0.0.1</span>
    </div>

    <!-- Close button -->
    <div class="sidenav__close-icon">
      <i class="fas fa-times sidenav__brand-close"></i>
    </div>

    <!-- Navigation -->
    <ul class="sidenav__list">
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-home' }">
          <icon-home/>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-item' }">
          <icon-star/>
          <span>Items</span>
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-currency' }">
          <icon-currency-dollar/>
          <span>Currencies</span>
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-player' }">
          <icon-user/>
          <span>Players</span>
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-storage' }">
          <icon-briefcase/>
          <span>Storages</span>
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-shop' }">
          <icon-shop/>
          <span>Shops</span>
        </router-link>
      </li>
      <li class="sidenav__list-item sidebar__list-item--disabled">
        <a href="https://google.com">
          <icon-building/>
          <span>Exchange</span>
        </a>
      </li>
      <li class="sidenav__list-item sidebar__list-item--disabled">
        <a href="https://google.com">
          <icon-puzzle/>
          <span>Crafting</span>
        </a>
      </li>
      <li class="sidenav__list-item sidebar__list-item--disabled">
        <a href="https://google.com">
          <icon-trophy/>
          <span>Drop tables</span>
        </a>
      </li>
    </ul>

    <!-- Technical navigation -->
    <ul class="sidenav__list sidenav__list--bottom">
      <li class="sidenav__list-item sidebar__list-item--disabled">
        <router-link :to="{ name: 'dashboard-iam' }">
          <icon-group/>
          <span>IAM</span>
        </router-link>
      </li>

      <li class="sidenav__list-item">
        <a href="https://www.gamecomponent.com/developers/economy-service" target="_blank">
          <icon-information/>
          <span>Documentation</span>
        </a>
      </li>

      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-config' }">
          <icon-cog/>
          <span>Config</span>
        </router-link>
      </li>

      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-logout' }">
          <icon-logout/>
          <span>Logout</span>
        </router-link>
      </li>

      <li class="sidenav__list-item sidenav__list-item--desktop-hidden" @click="$emit('close')">
        <a>
          <icon-close/>
          <span>Close sidebar</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import IconHome from "@/assets/icons/icon-home.svg";
import IconStar from "@/assets/icons/icon-star.svg";
import IconBriefcase from "@/assets/icons/icon-briefcase.svg";
import IconUser from "@/assets/icons/icon-user.svg";
import IconCurrencyDollar from "@/assets/icons/icon-currency-dollar.svg";
import IconInformation from "@/assets/icons/icon-information.svg";
import IconGroup from "@/assets/icons/icon-group.svg";
import IconCog from "@/assets/icons/icon-cog.svg";
import IconShop from "@/assets/icons/icon-store.svg";
import IconBuilding from "@/assets/icons/icon-building.svg";
import IconPuzzle from "@/assets/icons/icon-puzzle.svg";
import IconTrophy from "@/assets/icons/icon-trophy.svg";
import IconClose from "@/assets/icons/icon-x-square.svg";
import IconLogout from "@/assets/icons/icon-x-circle.svg";

@Component({
  components: {
    IconHome,
    IconStar,
    IconBriefcase,
    IconUser,
    IconCurrencyDollar,
    IconInformation,
    IconGroup,
    IconCog,
    IconShop,
    IconBuilding,
    IconPuzzle,
    IconTrophy,
    IconClose,
    IconLogout
  }
})
export default class DashboardNavigation extends Vue {
  @Prop() private open: boolean;
  private clickListener = null;

  public mounted() {
    this.clickListener = window.addEventListener(
      "click",
      this.handleClickOutside
    );
  }

  public beforeDestroy() {
    window.removeEventListener("click", this.clickListener);
  }

  public handleClickOutside() {
    this.$emit("close");
  }

  @Watch("$route")
  onRouteChanged() {
    this.$emit("close");
  }
}
</script>
