<template>
    <v-toolbar>
    <v-toolbar-title @click="home">
      Animal Shelter
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
    name: 'Header',
    methods: {
      home() {
        this.$router.push({path: '/'});
      }
    },
}
</script>

