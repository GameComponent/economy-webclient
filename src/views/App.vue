<style lang="scss">
*, *:before, *:after {
  box-sizing: inherit;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: rgba(0,0,0,0);
  -webkit-border-radius: 100px;
}

::-webkit-scrollbar:hover {
  background-color: rgba(0, 0, 0, 0.09);
}

::-webkit-scrollbar-thumb:vertical {
  background: rgba(0,0,0,0.2);
  -webkit-border-radius: 100px;
  background-clip: padding-box;
  border: 2px solid rgba(0, 0, 0, 0);
  min-height: 10px;
}

::-webkit-scrollbar-thumb:vertical:active {
  background: rgba(0,0,0,0.61);
  -webkit-border-radius: 100px;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

