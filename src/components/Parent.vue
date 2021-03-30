<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ msg }}</p>
        <hr>
        <child v-bind:name="name" v-bind:email="email"></child>
        <hr>
        <ul>
            <h3>Students</h3>
            <list
                v-for="student in students" 
                :key="student.id"
                :std="student"
            ></list>
        </ul>
    </div>
</template>

<script>
import Child from './Child'
import List from './List'
export default {
    data() {
        return {
            title: 'Parent',
            msg: 'details of parent component',
            name: 'Mohsin',
            email: 'mohsin@gmail.com',
            students: [
                {id: 1,name: 'Mohsin'},
                {id: 2,name: 'Ali'},
                {id: 3,name: 'Riad'},
                {id: 4,name: 'Anik'},
                {id: 5,name: 'Rakib'}
            ]
        }
    },
    components: {
        'child' : Child,
        'list' : List
    }
}
</script>

<style scoped>

</style>