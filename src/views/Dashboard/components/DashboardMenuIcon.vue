<style lang="scss">
.menu-icon {
  position: fixed; /* Needs to stay visible for all mobile scrolling */
  display: flex;
  top: 0px;
  left: 0px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
}

.menu-icon__circle {
  background-color: #38c172;
  color: white;
  width: 40px;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 100%;
}
</style>
<template>
  <div class="menu-icon">
    <div class="menu-icon__circle">
      M
    </div>
  </div>
</template>
