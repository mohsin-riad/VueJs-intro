<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ msg }}</p>
        <p>{{ name }}</p>
        <p>{{ email }}</p>
    </div>
</template>

<script>
export default {
    props: ['name','email'],
    data() {
        return {
            title: 'Child',
            msg: 'details of Child component'
        }
    }
}
</script>

<style scoped>

</style>