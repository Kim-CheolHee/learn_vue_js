<template>
    <div>header</div>
</template>

<script>
export default {
    methods: {
        addNum: function () {
            this.$emit('addNum', 10)
        }
    },
}
</script>

<style>

</style>