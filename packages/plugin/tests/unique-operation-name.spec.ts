import { join } from 'node:path';
import { GraphQLRuleTester, ParserOptions } from '../src';
import { rule } from '../src/rules/unique-operation-name';

const TEST_OPERATION = 'query test { foo }';

const SIBLING_OPERATIONS = (
  ...documents: string[]
): { parserOptions: Pick<ParserOptions, 'documents'> } => ({
  parserOptions: {
    documents,
  },
});

const ruleTester = new GraphQLRuleTester();

ruleTester.runGraphQLTests('unique-operation-name', rule, {
  valid: [
    {
      ...SIBLING_OPERATIONS(TEST_OPERATION),
      code: 'query test2 { foo }',
    },
    {
      // Compare filepath of code as real instead of virtual with siblings
      ...SIBLING_OPERATIONS(join(__dirname, 'mocks/unique-fragment.js')),
      filename: join(__dirname, 'mocks/unique-fragment.js/1_document.graphql'),
      code: /* GraphQL */ `
        query User {
          user {
            ...UserFields
          }
        }
      `,
    },
  ],
  invalid: [
    {
      ...SIBLING_OPERATIONS(TEST_OPERATION),
      code: 'query test { bar }',
      errors: [{ messageId: 'unique-operation-name' }],
    },
    {
      ...SIBLING_OPERATIONS(TEST_OPERATION, 'query test { bar2 }'),
      code: 'query test { bar }',
      errors: [{ messageId: 'unique-operation-name' }],
    },
  ],
});
