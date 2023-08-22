module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard',
        'plugin:vue/vue3-essential'
    ],
    overrides: [{
        env: {
            node: true
        },
        files: [
            '.eslintrc.{js,cjs}'
        ],
        parserOptions: {
            sourceType: 'script'
        }
    }],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    globals: {
        $: true,
        windows: true // 'windows' is not defined 예외
    },
    plugins: [
        'vue'
    ],
    rules: {
        indent: ['error', 4] // 들여쓰기 공백 4글자
    }
}
