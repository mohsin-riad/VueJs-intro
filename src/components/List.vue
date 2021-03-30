<template>
    <div>
        <li>{{ std.name }}</li>
    </div>
</template>

<script>
export default {
    props: ['std'],
    data() {
        return {
            title: 'List',
            msg: 'of Students'
        }
    }
}
</script>

<style scoped>

</style>