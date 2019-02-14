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
  transition: all .6s ease-in-out;
  z-index: 2; /* Needs to sit above the hamburger menu icon */
  background-color: #fff;
  border-left: 5px solid #7A33D6;
}

.sidenav.active {
  transform: translateX(0);
}

.sidebar__top {
  height: 60px;
  line-height: 60px;
  width: 100%;
  font-weight: bold;
  border-bottom: 1px solid #F8F8F8;
}

.sidebar__top-title {
  margin-left: 40px;
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
  list-style-type: none;
}

.sidenav__list-item {
  text-align: left;
  padding: 20px 20px 20px 40px;
}

.sidenav__list-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

/* Non-mobile styles, 750px breakpoint */
@media only screen and (min-width: 46.875em) {
  .sidenav {
    position: relative;
    transform: translateX(0);
  }

  .sidenav__close-icon {
    visibility: hidden;
  }
}
</style>

<template>
  <aside class="sidenav">
    <div class="sidebar__top">
      <span class="sidebar__top-title">Inventory Service</span>
    </div>
    <div class="sidenav__close-icon">
      <i class="fas fa-times sidenav__brand-close"></i>
    </div>
    <ul class="sidenav__list">
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-home' }">
          Dashboard
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-item' }">
          Items
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-currency' }">
          Currencies
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-player' }">
          Players
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-iam' }">
          IAM
        </router-link>
      </li>
      <li class="sidenav__list-item">
        <router-link :to="{ name: 'dashboard-documentation' }">
          Documentation
        </router-link>
      </li>
    </ul>
  </aside>
</template>