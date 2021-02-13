<template>
  <header>
    <nav>
      <ul class="common-nav">
        <li v-for="(link, index) in $store.state.commonLinks" :key="index">
          <router-link :to="link.to" v-if="link.img"><img src="" :alt="link.text"></router-link>
          <router-link v-else :to="link.to">{{ link.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '~/store/store'

export default Vue.extend({
  store
})
</script>
