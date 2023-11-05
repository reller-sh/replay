import { CodegenConfig } from '@graphql-codegen/cli'


const config: CodegenConfig = {
    schema: './public/schema.graphql',
    documents: ['./public/queries/**/*.graphql'],
    generates: {
        'src/api/public/schema.ts': {
            plugins: ['typescript', 'typed-document-node']
        },
    }
}
export default config