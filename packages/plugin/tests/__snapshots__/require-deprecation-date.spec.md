// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports[`Invalid #1 1`] = `
#### ⌨️ Code

      1 | scalar Old @deprecated(deletionDate: "22/08/2021")

#### ❌ Error

    > 1 | scalar Old @deprecated(deletionDate: "22/08/2021")
        |        ^^^ "Old" сan be removed

#### 💡 Suggestion: Remove \`Old\`

    1 |
`;

exports[`Invalid #2 1`] = `
#### ⌨️ Code

      1 | scalar Old @deprecated(untilDate: "22/08/2021")

#### ⚙️ Options

    {
      "argumentName": "untilDate"
    }

#### ❌ Error

    > 1 | scalar Old @deprecated(untilDate: "22/08/2021")
        |        ^^^ "Old" сan be removed

#### 💡 Suggestion: Remove \`Old\`

    1 |
`;

exports[`Invalid #3 1`] = `
#### ⌨️ Code

      1 | scalar Old @deprecated(deletionDate: "bad")

#### ❌ Error

    > 1 | scalar Old @deprecated(deletionDate: "bad")
        |                                      ^^^^^ Deletion date must be in format "DD/MM/YYYY"
`;

exports[`Invalid #4 1`] = `
#### ⌨️ Code

      1 | scalar Old @deprecated(deletionDate: "32/08/2021")

#### ❌ Error

    > 1 | scalar Old @deprecated(deletionDate: "32/08/2021")
        |                                      ^^^^^^^^^^^^ Invalid "32/08/2021" deletion date
`;

exports[`Invalid #5 1`] = `
#### ⌨️ Code

      1 | type Old { oldField: ID @deprecated }

#### ❌ Error

    > 1 | type Old { oldField: ID @deprecated }
        |                          ^^^^^^^^^^ Directive "@deprecated" must have a deletion date
`;
