const extensions = ['.js', '.ts', '.tsx', '.json', '.css', '.scss'];

const customHooksWithDeps = [
    'useUpdateOnlyEffect',
    'useSelector',
    'useAction',
];

/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    settings: {
        'import/extensions': extensions,
        'import/core-modules': [
            'redux-saga/effects',
        ],
    },
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        camelcase: 'off',
        curly: ['error', 'multi-or-nest'],
        'implicit-arrow-linebreak': 'off',
        'nonblock-statement-body-position': ['error', 'below'],
        'linebreak-style': ['error', 'windows'],
        'jsx-quotes': ['error', 'prefer-single'],
        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: false,
        }],
        'operator-linebreak': ['error', 'after', {
            overrides: {
                '?': 'before',
                ':': 'before',
            },
        }],
        'object-curly-newline': ['error', {
            multiline: true,
            consistent: true,
        }],
        'max-len': ['warn', {
            code: 100,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'no-shadow': 'off',
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-nested-ternary': 'off',
        'no-cond-assign': 'off',
        'no-param-reassign': 'off',
        'no-use-before-define': 'error',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        'no-return-await': 'off',
        'no-multiple-empty-lines': ['error', {
            max: 2,
        }],
        'import/extensions': 'off',
        'import/no-cycle': 'off',
        'import/prefer-default-export': 'off',
        'import/no-import-module-exports': 'off',
        'import/no-unresolved': ['warn', {
            commonjs: true,
            caseSensitive: true,
        }],
        'import/newline-after-import': ['error', {
            count: 2,
        }],
        'import/order': ['error', {
            pathGroups: [
                {pattern: '**/*.scss', group: 'unknown'},
                {pattern: '@/**/!(*.scss)', group: 'internal'},
            ],
            alphabetize: {
                order: 'desc',
                caseInsensitive: true,
            },
            groups: [
                ['builtin', 'external'],
                'internal',
                'parent',
                ['index', 'sibling'],
                'type',
                'unknown'
            ],
            'newlines-between': 'always',
        }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/button-has-type': 'off',
        'react/no-children-prop': ['error', {
            allowFunctions: true,
        }],
        'react-hooks/exhaustive-deps': ['warn', {
            additionalHooks: `^(${customHooksWithDeps.join('|')})$`,
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js', '.tsx'],
        }],
        'react/sort-comp': ['error', {
            order: [
                'instance-variables',
                'static-methods',
                'lifecycle',
                'everything-else',
                'rendering',
            ],
            groups: {
                rendering: [
                    '/^render.+$/',
                    'render',
                ],
            },
        }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'jsx-a11y/anchor-is-valid': 'off',
        '@next/next/no-img-element': 'off', // TODO: remove img filtering rule in future
    }
}
