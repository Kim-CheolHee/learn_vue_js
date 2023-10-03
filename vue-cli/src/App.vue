<template>
    <div>
        <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
        <app-header :propsdata="str" @renew="renewStr"></app-header>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue'

    export default {
        data: function () {
            return {
                str: 'Hi, Vue!'
            }
        },
        components: {
            'app-header': AppHeader
        },
        methods: {
            renewStr: function () {
                this.str = 'change Vue!'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>