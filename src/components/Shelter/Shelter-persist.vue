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
        <Notify :snackMessage="snackMessage" :snackbar="snackbar" @close="close"></Notify>
    </div>
</template>

<script>
import Notify from '@/components/layouts/Notify.vue';
export default {
    name: 'ShelterPersist',
    components: {
        Notify
    },
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
            ],
            snackbar: false,
            snackMessage: ""
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
                this.notify('Shelter saved with success');
            })
            .catch(function(error){
                this.notify('Ops, an error has ocurred');
                //TODO make notifications
            });

        },
        notify(message) {
            this.snackMessage = message;
            this.snackbar = true;
        },
        close() {
            this.snackbar = false;
        }
    }
}
</script>