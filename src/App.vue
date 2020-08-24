<template>
  <div id="app" class="app">
    <router-view/>
    <Footers></Footers>
  </div>
</template>

<script>

import Home from '@/components/Home'
import Footers from '@/components/Footers'

export default {
  name: 'App',
  components: {
    'Home': Home,
    'Footers': Footers
  }
}

</script>

<style>
.app {
  background-color: #faf9de;
}

</style>