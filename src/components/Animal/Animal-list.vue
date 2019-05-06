<template>
    <div>
        <v-layout align-center justify-space-between row fill-height>

            <h2 class="headline mb-0">AnimalList</h2>
        
            <v-btn color="success" @click="add">
                Add
            </v-btn>   
        </v-layout>

        <v-data-table
            :headers="headers"
            :items="animals"
            class="elevation-1">
            <template v-slot:items="animal">
                <td>{{ animal.item.name }}</td>
                <td>{{ animal.item.type.name }}</td>
                <td>{{ animal.item.age }}</td>
                <td>{{ animal.item.shelter.name }}</td>
                <td>{{ animal.item.description }}</td>
                <td>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn flat color="success" v-on="on" 
                                @click="adopt(animal.item)">
                                <v-icon> favorite</v-icon>
                            </v-btn>    
                        </template>
                        <span>Adopt this animal</span>
                    </v-tooltip>
                </td>
            </template>
        </v-data-table>
        <v-layout align-center justify-end row fill-height>
            <v-btn color="error" @click="$router.push({path: '/'})">
                return
            </v-btn>   
        </v-layout>
        <Notify :snackMessage="snackMessage" :snackbar="snackbar" 
            @close="close"></Notify>
    </div>
</template>

<script>
import Notify from '@/components/layouts/Notify.vue'
export default {
    name: 'AnimalList',
    components: {
        Notify
    },
    data() {
        return {
            animals: [],
            headers: [
                {text: 'Name', value: 'name'},
                {text: 'Type', value: 'type.name'},
                {text: 'Age', value: 'age'},
                {text: 'Shelter', value: 'shelter.name'},
                {text: 'Description', value: 'description'},
                {text: ''},
            ],
            snackbar: false,
            snackMessage: ""
        }
    },
    methods: {
        add() {
            this.$router.push({path:'animal/persist'})
        },
        adopt(data) {
            this.$axios.put((process.env.VUE_APP_PATH + 'animal/'+ data.id), {
                'status_id': 2,
            })
            .then( (res) => {
                this.updateData();
                this.notify("Thank's  for adopt me human =^.^= ");
            })
            .catch(function(error){
                this.notify("Oops, somthing went wrong, please try again");
            });
        },
        updateData() {
            this.$axios.get((process.env.VUE_APP_PATH + 'animal'), {
             params: {
                 status_id: 1
             }    
         })
            .then( response => (this.animals = response.data.data));
        },
        notify(message) {
            this.snackMessage = message;
            this.snackbar = true;
        },
        close() {
            this.snackbar = false;
        }
    },
    mounted: function() {
         this.updateData();
    }
}
</script>
