<template>
    <div class="container">
        <b-col sm="6">
            <h2 class="display-4">Insert Employee</h2>
            <b-form @submit="submitfn">
                <div class = "card-body">
                    <b-form-group id="input-group-2" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="name"
                        placeholder="Enter name"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label-for="input-1">
                        <b-form-input
                        id="input-1"
                        v-model="email"
                        type="email"
                        placeholder="Enter email"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Gender" >
                        <b-form-radio v-model="gender" name="some-radios" value="male">Male</b-form-radio>
                        <b-form-radio v-model="gender" name="some-radios" value="female">Female</b-form-radio>
                    </b-form-group>
                    
                    <b-form-group label="Status" >
                        <b-form-checkbox
                            id="checkbox-1"
                            v-model="is_active"
                            name="checkbox-1"
                            value="1"
                            unchecked-value="0"
                            >
                            Active
                        </b-form-checkbox>
                    </b-form-group>

                    <b-form-group label="Role"  id="input-group-3" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="role"
                        :options="roles"
                        required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group label="Date Of Birth" id="input-group-4" label-for="input-4">
                        <b-form-input
                        id="input-4"
                        v-model="date_of_birth"
                        type="date"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-5" label-for="input-5">
                        <b-form-input
                        id="input-5"
                        v-model="password"
                        type="password"
                        placeholder="Enter Password"
                        required
                        ></b-form-input>
                    </b-form-group>

                </div>
                <b-button type="submit" variant="primary">Create</b-button>
            </b-form>
        </b-col>
        <hr>
        <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:'',
            email:'',
            gender:'',
            is_active:'0',
            date_of_birth:null,
            role:null,
            password:"",
            roles: [{ text: 'Select One', value: null}, 'admin', 'manager'],
            // show: true
        }
    },
    created() {
    },
    methods: {
        redirect(){
            this.$router.push('/manage-employee/employee'); 
        },
        submitfn(e) {
            e.preventDefault();
            this.$http.post('http://127.0.0.1:8000/api/insert-employees', {
                name: this.name,
                email: this.email,
                gender: this.gender,
                is_active: this.is_active,
                date_of_birth: this.date_of_birth,
                role: this.role,
                password: this.password
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
            this.redirect();
        }
    }
}
</script>

<style scoped>

</style>