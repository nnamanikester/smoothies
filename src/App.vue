<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s - Kester Smoothies'
  }
}
</script>

<style>

</style>
