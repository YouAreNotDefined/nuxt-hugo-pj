<template>
  <header class="header">
    <nav>
      <ul class="header-nav">
        <li>
          <router-link to="/"><img src="" alt="Bouzuweed"></router-link>
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.header-nav{
  display: flex;
  justify-content: space-between;
}
</style>
