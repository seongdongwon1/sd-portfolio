module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        camelcase: 'off',
        'vue/attribute-hyphenation': 'off'
    }
}
