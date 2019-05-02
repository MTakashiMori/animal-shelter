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
                        <v-select v-model="type"
                            :items="types"
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
                         <v-select v-model="shelter"
                            :items="shelters" 
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

<script>
export default {
    name: 'AnimalPersist',
    data() {
        return {
            name: '',
            nameRules: [
                v => !!v || 'Name of animal is required'
            ],
            types: [
                'Dog',
                'Cat',
                'Horse',
                'Snake'
            ],
            type: '',
            typeRules: [
                v => !!v || 'Type of animal is required'
            ],
            age: '',
            ageRules: [
                v => !!v || 'Age of animal is required'
            ],
            shelters: [
                'St Francis',
                'Heaven of Pets',
                'Pet Palace',
                'Home Pet Home'
            ],
            shelter: '',
            shelterRules: [
                v => !!v || 'Shelter of animal is required'
            ],
            description: '',
            descriptionRules: [
                v => !!v || 'Description of animal is required'
            ]
        }
    },
    methods: {
        submit() {
            if(!this.$refs.form.validate()){
                return;
            }
        }
    }
}
</script>
