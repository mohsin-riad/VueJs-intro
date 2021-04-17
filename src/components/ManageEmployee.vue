<template>
    <div class="container">
        <div  style="text-align :center;">
            <h1 class="display-4">Manage Employee</h1>
            <router-link  class="btn btn-warning" :to="{ path: '/manage-employee/insert' }">Create Employee</router-link >
            <router-link  class="btn btn-success" :to="{ path: '/manage-employee/employee' }">Veiw Employees</router-link >
        </div>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
}
</script>

<style scoped>
</style>