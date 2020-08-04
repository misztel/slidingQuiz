<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/play">Play</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>

.app{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  overflow: hidden;
}

</style>
