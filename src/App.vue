<template>
  <div id="app">
    <p>
      <router-link to="/">Items</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
