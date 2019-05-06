<template>
    <div>
        <v-snackbar left bottom v-model="snackbar">
            {{snackMessage}}
             <v-btn color="pink" flat icon @click="close"> 
                <v-icon>clear</v-icon>
             </v-btn>    
        </v-snackbar>
    </div>
</template>

<script>
export default {
    name: 'Notify',
    props: [
        'snackbar',
        'snackMessage'
    ],
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>
