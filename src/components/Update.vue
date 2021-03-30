<template>
    <div class="container">
        <b-col sm="9">
            <h2 class="display-4">Update Information</h2>
            <b-form @submit="submitfn">
                <div class = "card-body">
                    <b-form-group id="input-group-2" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="employee.name"
                        placeholder="Enter name"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label-for="input-1">
                        <b-form-input
                        id="input-1"
                        v-model="employee.email"
                        type="email"
                        placeholder="Enter email"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Gender" >
                        <b-form-radio v-model="employee.gender" name="some-radios" value="male">Male</b-form-radio>
                        <b-form-radio v-model="employee.gender" name="some-radios" value="female">Female</b-form-radio>
                    </b-form-group>
                    
                    <b-form-group label="Status" >
                        <b-form-checkbox
                            id="checkbox-1"
                            v-model="employee.is_active"
                            name="checkbox-1"
                            value="1"
                            unchecked-value="0"
                            >
                            Active
                        </b-form-checkbox>
                    </b-form-group>

                    <b-form-group label="Role"  id="input-group-3" label-for="input-3" >
                        <b-form-select
                        id="input-3"
                        v-model="employee.role"
                        :options="roles"
                        required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group label="Date Of Birth" id="input-group-4" label-for="input-4">
                        <b-form-input
                        id="input-4"
                        v-model="employee.date_of_birth"
                        type="date"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-5" label-for="input-5">
                        <b-form-input
                        id="input-5"
                        v-model="employee.password"
                        type="password"
                        placeholder="Enter Password"
                        required
                        ></b-form-input>
                    </b-form-group>

                </div>
                <b-button type="submit"  variant="primary">Update</b-button>
            </b-form>
        </b-col>
        <hr><br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // name:'',
            // email:'',
            // gender:'',
            // is_active:'0',
            // date_of_birth:null,
            // role:null,
            // password:"",
            roles: [{ text: 'Select One', value: null}, 'admin', 'manager'],
            // show: true
            employee :[]
        }
    },
    created() {
        const baseApi = 'http://127.0.0.1:8000/api/get-employee/'+`${this.$route.params.id}`
        this.$http.get(baseApi)
        .then((result) => {
            this.employee = result.data.employee,
            console.log(this.employee)
        })
    },
    methods: {
        redirect(){
            this.$router.push('/manage-employee/employee'); 
        },
        submitfn(e) {
            e.preventDefault();
            // console.log(this.employee.name)
            // console.log(this.employee.email)
            // console.log(this.employee.gender)
            // console.log(this.employee.is_active)
            // console.log(this.employee.date_of_birth)
            // console.log(this.employee.role)
            // console.log(this.employee.password)            
            const pushApi = 'http://127.0.0.1:8000/api/update-employees/'+`${this.$route.params.id}`
            this.$http.post(pushApi, {
                    name: this.employee.name,
                    email: this.employee.email,
                    gender: this.employee.gender,
                    is_active: this.employee.is_active,
                    date_of_birth: this.employee.date_of_birth,
                    role: this.employee.role,
                    password: this.employee.password
                })
                .then(function (response) {
                    // alert(response.data.msg);
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