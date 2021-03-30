<template>
    <div>
        <h1>{{ title }}</h1>
        <hr>
        <about></about>
        <hr>
        <history></history>
    </div>
</template>

<script>
import About from './About'
import History from './History'

export default {
    data() {
        return{
            title: 'About + History'
        }
    },
    components: {
        'about' : About,
        'history' : History
    }
}
</script>

<style scoped>

</style>