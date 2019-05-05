<template>
    <div>     
        <v-form @submit.prevent="submit" ref="form">
            <v-container>
                <v-layout>
                    <v-flex xs12>
                        <v-text-field v-model="name" 
                            :rules="nameRules" 
                            label="Name" 
                            required>
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                         <v-text-field v-model="cnpj" 
                            :rules="cnpjRules" 
                            label="CNPJ" 
                            min="0"
                            mask="##.###.###/####-##"
                            required>
                        </v-text-field>
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
    name: 'ShelterPersist',
    data() {
        return {
            name: '',
            nameRules: [
                v => !!v || 'Name of shelter is required'
            ],
            cnpj: '',
            cnpjRules: [
                v => !!v || 'CNPJ of shelter is required',
                v => v.length >= 14 || 'CNPJ of shelter is invalid'
            ],
            description: '',
            descriptionRules: [
                v => !!v || 'Description of shelter is required'
            ]
        }
    },
    methods: {
        submit() {
            if(!this.$refs.form.validate()){
                return;
            }

            this.$axios.post((process.env.VUE_APP_PATH + 'shelter'), {
                'name': this.name,
                'description': this.description,
                'cnpj': this.cnpj
            })
            .then( res => {
                this.$router.go(-1);
            })
            .catch(function(error){
                //TODO make notifications
            });

        }
    }
}
</script>