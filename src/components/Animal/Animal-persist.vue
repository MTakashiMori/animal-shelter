<template>
    <div>
        <v-form @submit.prevent="submit" ref="form">
            <v-container>
                <v-layout>
                    <v-flex xs6>
                        <v-text-field v-model="name" 
                            :rules="nameRules" 
                            label="Name" 
                            required>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-select v-model="types_id"
                            :items="types"
                            item-text="name"
                            return-object
                            :rules="typeRules" 
                            label="Type" 
                            required>
                        </v-select>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs6>
                         <v-text-field v-model="age" 
                            :rules="ageRules" 
                            label="Age" 
                            type="number"
                            min="0"
                            required>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs6>
                         <v-select v-model="shelters_id"
                            :items="shelters"
                            return-object
                            item-text="name"
                            :rules="shelterRules" 
                            label="Shelter" 
                            required>
                         </v-select>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-textarea v-model="description" 
                            :rules="descriptionRules" 
                            label="Description" 
                            type="text-area"
                            :counter="250"
                            maxlength="250"
                            rows="3"
                            required />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
        <v-layout justify-end>
            <v-btn  color="error" @click="$router.go(-1)"> Cancel</v-btn>
            <v-btn  color="success" @click="submit"> Save</v-btn>
        </v-layout>
    </div>
</template>
//TODO salvar e corrigir erros
<script>
export default {
    name: 'AnimalPersist',
    data() {
        return {
            name: '',
            nameRules: [
                v => !!v || 'Name of animal is required'
            ],
            types_id: '',
            types: [],
            typeRules: [
                v => !!v || 'Type of animal is required'
            ],
            age: '',
            ageRules: [
                v => !!v || 'Age of animal is required'
            ],
            shelters: [],
            shelters_id: '',
            shelterRules: [
                v => !!v || 'Shelter of animal is required'
            ],
            description: '',
            descriptionRules: [
                v => !!v || 'Description of animal is required'
            ],
            status_id: '',
            status: []
        }
    },
    methods: {
        submit() {
            if(!this.$refs.form.validate()){
                return;
            }

            this.status_id = this.status.find( (res) => {
                return res.name === "Ownerless"
            });

            this.$axios.post((process.env.VUE_APP_PATH + 'animal'), {
                'name': this.name,
                'types_id': this.types_id.id,
                'age': this.age,
                'shelters_id': this.shelters_id.id,  
                'description': this.description,
                'status_id': this.status_id.id
            })
            .then(function (response){
                //TODO return to list page
                //TODO make loading
            })
            .catch(function(error){
                //TODO make notifications
            });
            
            this.$router.push({path: '/animal'})
        }
    },
    mounted: function () {
            this.$axios.get((process.env.VUE_APP_PATH + 'type'))
            .then( response => (this.types = response.data.data));

            this.$axios.get((process.env.VUE_APP_PATH + 'shelter'))
            .then( response => (this.shelters = response.data.data));

            this.$axios.get((process.env.VUE_APP_PATH + 'status'))
            .then( response => (this.status = response.data.data));
        
    },
}
</script>
