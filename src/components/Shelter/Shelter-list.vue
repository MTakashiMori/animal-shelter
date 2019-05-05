<template>
    <div>
        <v-layout align-center justify-space-between row fill-height>

            <h2 class="headline mb-0">ShelterList</h2>
        
            <v-btn color="success" @click="add">
                Add
            </v-btn>   
        </v-layout>

         <v-data-table
            :headers="headers"
            :items="shelters"
            class="elevation-1">
            <template v-slot:items="shelter">
                <td>{{ shelter.item.name }}</td>
                <td>{{ shelter.item.cnpj | cnpj}}</td>
                <td>{{ shelter.item.description }}</td>
            </template>
        </v-data-table>
        <v-layout align-center justify-end row fill-height>
            <v-btn color="error" @click="$router.push({path: '/'})">
                return
            </v-btn>   
        </v-layout>
    </div>
</template>

<script>
export default {
    name: 'ShelterList',
    data() {
        return {
            shelters: [],
            headers: [
                {text: 'Name', value: 'name'},
                {text: 'CNPJ', value: 'cnpj'},
                {text: 'Description', value: 'description'},
            ]
        }
    },
    methods: {
        add() {
            this.$router.push({path:'shelter/persist'})
        },
        updateData() {
            this.$axios.get((process.env.VUE_APP_PATH + 'shelter'))
            .then( response => (
                this.shelters = response.data.data
                )
            );
        }
    },
    filters: {
        cnpj: function (value) {
            return value;
        }
    },
    mounted() {
        this.updateData();
    }
}
</script>