<template>
  <div id="app">
    <h1>Ping pong at work! 🏓</h1>
    <p>{{ hello.msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    hello () {
      return this.$store.getters['config/hello']
    }
  },
  mounted () {
    this.$store.dispatch('config/hello')
  }
}
</script>
<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
