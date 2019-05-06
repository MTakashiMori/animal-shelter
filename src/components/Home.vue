<template>
    <div>
        <v-layout align-center justify-center row fill-height>
            <v-btn color="success" to="animal">Animal's</v-btn>
            <v-btn color="success" to="shelter">Shelter's</v-btn>
        </v-layout>

        <h1 style="text-align:center">Welcome to animal shelter</h1>

        <div class="container">
            <p>This is a simple project using <strong>Laravel</strong>, 
        <strong>VueJs</strong> and <strong>Vuetify</strong>. You can visit this
        project page on <a href="https://github.com/MTakashiMori/animal-shelter"><strong>Github</strong></a>, 
        or access the <a @click="$router.push({path: '/about'})"><strong>About</strong></a>  section to know more.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
a{
    text-decoration: none;
}
</style>

