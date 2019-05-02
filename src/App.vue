<template>
  <v-app>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </v-app>
</template>

<script>

import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import Content from '@/components/layouts/Content.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Content
  }
}
</script>
