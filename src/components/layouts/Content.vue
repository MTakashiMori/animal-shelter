<template>
    <div class="container">
        <v-card class="elevation-7">
            <v-card-title>
                <h2 class="headline mb-0">
                    {{this.$route.name}}
                </h2>
            </v-card-title>
            <div class="container">
                <router-view></router-view>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

