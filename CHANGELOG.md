# [2.0.0-pre2](https://github.com/wzr1337/rsi.schema/compare/2.0.0-pre1...2.0.0-pre2) (2019-06-11)


### Bug Fixes

* **$rsi.schema:** fix name property being an opbject of type string ([9119956](https://github.com/wzr1337/rsi.schema/commit/9119956))
* **$rsi.schema:** fixes usage of element and resource level accessMethods ([ae35a68](https://github.com/wzr1337/rsi.schema/commit/ae35a68))
* **$rsi.schema:** only allow ids of type string ([c9b6106](https://github.com/wzr1337/rsi.schema/commit/c9b6106))
* **$rsi.schema:** remove integer as a valid typ. numeric with a resolution of 1 needs to be used in v2 ([e7741c5](https://github.com/wzr1337/rsi.schema/commit/e7741c5))
* **$rsi.schema:** remove obsolete endpointsDefinition as accessMethods took over ([63de738](https://github.com/wzr1337/rsi.schema/commit/63de738))
* **$rsi.schema:** srviuce name is a technical asset identifier used in tooling and therefore shall be equally cased (lowercase preferred). ([7ef7c99](https://github.com/wzr1337/rsi.schema/commit/7ef7c99))
* **$rsi.schema.objectModelReference:** the refernece shall comply with https://github.com/wzr1337/rsi.schema/issues/2 ([e45229e](https://github.com/wzr1337/rsi.schema/commit/e45229e))
* **examples/media:** comply with lowerCamelCase styling for scopes ([d0eb550](https://github.com/wzr1337/rsi.schema/commit/d0eb550))
* **examples/media:** fix schema refernece to point to the correct file ([6fcee9f](https://github.com/wzr1337/rsi.schema/commit/6fcee9f))
* **examples/media:** remove properties level in POST parameters ([8444887](https://github.com/wzr1337/rsi.schema/commit/8444887))
* **examples/media:** revert "resources" to be a list (https://github.com/wzr1337/rsi.schema/issues/3) ([da4f3be](https://github.com/wzr1337/rsi.schema/commit/da4f3be))
* **package:** fix media validation script ([d763a34](https://github.com/wzr1337/rsi.schema/commit/d763a34))
* **schema.serviceDefinition:**  only allow rsi, no "old" viwi naming ([6abea8d](https://github.com/wzr1337/rsi.schema/commit/6abea8d))


### Features

* **cli:** add the cli software and components ([02198a9](https://github.com/wzr1337/rsi.schema/commit/02198a9))
* make "resources" an ordered list ([acc2270](https://github.com/wzr1337/rsi.schema/commit/acc2270))
* **.schema.json:** implement initial validation rules for types ([d918b23](https://github.com/wzr1337/rsi.schema/commit/d918b23))
* **$rsi.schema:**  resourcesDefinition becomes resourcesObjectDefinition, to be embedded in the array of resources ([58c5ef7](https://github.com/wzr1337/rsi.schema/commit/58c5ef7))
* **$rsi.schema:** add booleanTypeDefintion, stringTypeDefintion andnumberTypeDefintion ([3e1f00f](https://github.com/wzr1337/rsi.schema/commit/3e1f00f))
* **$rsi.schema:** add elementAccessMethodsDefinition, resourceAccessMethodsDefinition, accessMethodsDefinition ([61a1d8e](https://github.com/wzr1337/rsi.schema/commit/61a1d8e))
* **$rsi.schema:** make resources a list of objects ([8d4879a](https://github.com/wzr1337/rsi.schema/commit/8d4879a))
* **$rsi.schema:** resourcesDefinition => resourcesObjectDefinition ([b16c8d5](https://github.com/wzr1337/rsi.schema/commit/b16c8d5))
* **$rsi.schema:** split up objectPropertyDefinition ([d7297a1](https://github.com/wzr1337/rsi.schema/commit/d7297a1))
* **$rsi.schema:** validating against sample schema following spec.. far more restrictions needed.. ([2ca79a1](https://github.com/wzr1337/rsi.schema/commit/2ca79a1))
* **example.media:** references following latest proposal ([86ae594](https://github.com/wzr1337/rsi.schema/commit/86ae594))
* **example.media:** remove obsolete properties level ([db98727](https://github.com/wzr1337/rsi.schema/commit/db98727))
* **examples:** add media examples ([1e07fec](https://github.com/wzr1337/rsi.schema/commit/1e07fec))
* **examples:** add original schema for media ([87be2fb](https://github.com/wzr1337/rsi.schema/commit/87be2fb))
* **examples.media:** comply with https://github.com/wzr1337/rsi.schema/issues/6 ([99bdab3](https://github.com/wzr1337/rsi.schema/commit/99bdab3))
* **README:** add README.md ([fcbd9fa](https://github.com/wzr1337/rsi.schema/commit/fcbd9fa))
* **schema.spec:** merge integer and number, make resolution mandatory on number type ([b9194a3](https://github.com/wzr1337/rsi.schema/commit/b9194a3))
* **types:** properly document the definition of types ([f1fd811](https://github.com/wzr1337/rsi.schema/commit/f1fd811))



## 0.0.1 (2018-10-02)



