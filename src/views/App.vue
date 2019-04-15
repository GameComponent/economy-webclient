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

// Table component
.gc-table {
  background-color: white;
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.gc-table a {
  text-decoration: none;
  color: #187741;
  font-weight: 500;
  margin-right: 20px;
  margin-left: 20px;
}

.gc-table a:hover {
  text-decoration: underline;
}

.gc-table th {
  padding: 20px;
  text-align: left;
}

.gc-table tbody tr:hover {
  background-color: #F5F8FC;
}

.gc-table thead {
  background-color: #F2F5F7;
}

.gc-table thead th {
  font-weight: semibold;
  color: #4a4a4a;
  text-transform: uppercase;
  padding: 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.gc-table tbody tr td:last-child {
  text-align: right;
}

.gc-table tbody td {
  padding: 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.gc-table__description {
  font-size: 10px;
  color: #888;
}

// Pre component
.gc-pre {
  border-left: 3px solid #38c172;
  background-color: #eee;
  padding: 20px;
  border-radius: 5px;
}

// Wrapper component
.gc-wrapper-1 {
  border-left: 3px solid #bdbbbb;
  background-color: #eee;
  padding: 20px;
  border-radius: 5px
}

// Input component
.gc-input {
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #bdbbbb;
}

// Button component
.gc-button {
  display: inline-block;
  background-color: #38c172;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  border: 0;
  cursor: pointer;
}

.gc-button:hover {
  background-color: #249d57;
  transition: .2s;
}

.gc-button--disabled {
  background-color: #888;
}

.gc-label-title {
  color: #555;
  font-size: 10px;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

