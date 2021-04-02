<template>
    <div class="container">
        <div class="overflow-auto">
            <!-- <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination> -->
            <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
            <!-- <b-table id="my-table" :per-page="perPage" :current-page="currentPage" responsive hover :items="employees" :fields="fields" caption-top>
                <template #table-caption>Employee List</template>
                <template v-slot:cell(action)="emp">
                    <b-button size="sm"  :to="{ path: './update/'+`${emp.id}`, component: Update }" class="btn btn-warning">Edit</b-button>
                    <b-button size="sm"  class="btn btn-danger">Delete</b-button>
                </template>
            </b-table> -->
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Date Of Birth</th>
                        <th>Privilege</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="emp in employees" :key="emp.id" :value="emp.id">
                        <th>{{ emp.name }}</th>
                        <th>{{ emp.email }}</th>
                        <th> **** </th>
                        <th>{{ emp.gender }}</th>
                        <th>{{ emp.is_active ? 'Active' : 'Inactive' }}</th>
                        <th>{{ emp.date_of_birth }}</th>
                        <th>{{ emp.role }}</th>
                        <th><router-link :to="{ path: '/manage-employee/update/'+`${emp.id}`, component: Update , params: { id: emp.id },}" class="btn btn-warning"> Edit </router-link></th>
                    </tr>
                </tbody>
            </table>
        </div>  
    </div>
</template>

<script>
    
export default {
    data() {
        return {
            fields: ['id', 'name', 'email', 'password', 'gender', 'is_active', 'date_of_birth', 'role','action'],
            employees: []
        }
    },
    mounted() {
        this.reload();
        const baseURI = 'http://127.0.0.1:8000/api/employees'
        this.$http.get(baseURI)
        .then((result) => {
            this.employees = result.data.employees
        })
    },
    computed: {
      rows() {
        console.log(this.employees.length)
        return this.employees.length
      }
    },
    methods: {
        reload(){
            this.$forceUpdate();
        }
    }
}
</script>

<style scoped>

</style>