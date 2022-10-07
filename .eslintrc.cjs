module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            tsx: true,
            jsx: true,
        },
    },

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',

            settings: {
                'react': { version: 'detect' },
                'import/resolver': {
                    typescript: {},
                },
            },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                'plugin:import/errors',
                'plugin:import/warnings',
                'plugin:import/typescript',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:jsx-a11y/recommended',
                'plugin:testing-library/react',
                'plugin:jest-dom/recommended',
                'plugin:@typescript-eslint/recommended',
                'prettier',
            ],
            plugins: ['prettier'],
            rules: {
                'no-restricted-imports': [
                    'error',
                    {
                        patterns: [
                            '@/features/*/*',
                            '@/stores/*/*',
                            '@/components/*/*',
                            '@/constants/*/*',
                            '@/lib/*/*',
                        ],
                    },
                ],

                'linebreak-style': ['error', 'unix'],
                'react/prop-types': 'off',

                'import/order': [
                    'error',
                    {
                        // groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                        // groups: [
                        //   ['parent', 'sibling', 'index'],
                        //   ['builtin', 'external', 'internal'],
                        // ],
                        'groups': [
                            'index',
                            'sibling',
                            'parent',
                            'internal',
                            'external',
                            'builtin',
                            'object',
                            'type',
                        ],
                        'newlines-between': 'always',
                    },
                ],
                'sort-imports': [
                    'error',
                    {
                        ignoreCase: true,
                        ignoreDeclarationSort: true,
                    },
                ],
                'import/default': 'off',
                'import/no-named-as-default-member': 'off',
                'import/no-named-as-default': 'off',
                'import/newline-after-import': ['error', { count: 1 }],
                'react/react-in-jsx-scope': 'off',

                'jsx-a11y/anchor-is-valid': 'off',

                '@typescript-eslint/no-unused-vars': ['error'],

                '@typescript-eslint/explicit-function-return-type': ['off'],
                '@typescript-eslint/explicit-module-boundary-types': ['off'],
                '@typescript-eslint/no-empty-function': ['off'],
                '@typescript-eslint/no-explicit-any': ['off'],

                'prettier/prettier': ['error'],
            },
            plugins: ['prettier'],
        },
    ],
};
