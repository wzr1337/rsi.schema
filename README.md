# RSI schema validation scheme

In order to have properly structured schemas, we need a validation scheme that can work with any JSON validator.

Please refer to <https://github.com/w3c/automotive-bg/tree/gh-pages/rsi> if you want to know about RSI.

## Rewrite & Validation

The schema files publish on W3Cs github repo are redundant in data they hold, not clear enough on meaning, nor are the catering for authorization scopes. The aim of this repository is to collaboratively define a new schema version and to provide a validation scheme (JSON) to validate any new schema.

Please feel free to jump in and contribute.

## Using the cli

```bash
$ npm run validate -- examples/foo/schema.json
```

will run the validator against `examples/foo/schema.json`

### validating media
```bash
$ npm run validate:media
```

will run the validator against the media example

## Migration

The [examples](examples) folder holds original files and rewrites to illustrate the migration of the original to the new version.

## LICENSE

[LICENSE]("LICENSE")