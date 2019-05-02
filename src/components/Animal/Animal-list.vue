<template>
    <div>
        <h1>AnimalList</h1>
        <h1 @click="add">Add</h1>
    </div>
</template>

<script>
export default {
    name: 'AnimalList',
    methods: {
        add() {
            this.$router.push({path:'animal/persist'})
        }
    },
}
</script>
