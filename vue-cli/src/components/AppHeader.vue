<template>
    <header>
        <!-- <h1>Header</h1>     -->
        <h1>{{ propsdata }}</h1>
        <button @click="sendEvent">send</button>
    </header>
</template>

<script>
    export default {
        props: ['propsdata'],
        methods: {
            sendEvent: function () {
                this.$emit('renew')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>