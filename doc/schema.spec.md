# JSON Schema V2 Specification

The JSON schema is a formal description of services defined for the RSI (formerly viwi) framework [https://www.w3.org/Submission/viwi-protocol/](https://www.w3.org/Submission/viwi-protocol/)

The following JSON structure (commented) describes the different aspects (keys) of the JSON schema

The `<>` notation us understood as a place holder. 

```javascript
{
  "name": "rsi.service.<name>", // holds the service <name> prefixed with `rsi.service` => everything will be hosted under /<service>/
  "description" : "Lorem Ipsum amet sit", // holds a mandatory description for the service
  "$schema": "https://github.com/wzr1337/rsi.schema/blob/2.0.0/dist/$rsi.schema.json", // the reference to the current validation schema
  "resources" : { // holds all the resources as an object structure
    "<resourceName>": { // the <resourceName> of the resource we are defining => everything will be hosted under /<service>/<resourceName>/
      "description": "Lorem Ipsum amet sit", // a mandatory resource description answering the question: "What kindof elements are held in the resource
      "objectModel": { // this key opens a subtree for the actual element definition id, name & uri are mandatory, can be followed by as many custom attributes as you like
        "attributes": { // this key opens a subtree for the element attributes/properties definition
          "id": { // this key is mandatory to all objectModel definitions
            "description": "mandatory id", // description is a mandatory field of any attribute definition
            "type": "string", // this attribute is of type string
            "format": "uuid" // the string value of the attribute/property will be in the uuid format
          },
          "name": { // this key is mandatory to all objectModel definitions
            "description": "mandatory name", // description is a mandatory field of any attribute definition
            "type": "string" // this attribute is of type string
          },
          "uri": { // this key is mandatory to all objectModel definitions
            "description": "object uri", // description is a mandatory field of any attribute definition
            "type": "string", // this attribute is of type string
            "format": "uri" // the string value of the attribute/property will be in the uuid format
          },
          "<stringAttribute>": { // defines and option attribute
            "description": "object uri", // description is a mandatory field of any attribute definition
            "type": "string", // this attribute is of type string
            "format": "<format>" // the string value of the attribute/property will be in the <format> - predefined or regex - format (optional)
            "enum": [ // limits the number of valid values (optional)
              ...
            ]
          },
          "<integerAttribute>": { // defines and option attribute
            "description": "an integer number", // description is a mandatory field of any attribute definition
            "type": "integer", // this attribute is of type integer
            "minimum": 0, // specifies the minumum value (optional)
            "maximum": 0 // specifies the maximum value (optional)
            "unit": "<unit>" // the <unit> teh value is measured in (optional)
          },
          "<numberAttribute>": { // defines and option attribute
            "description": "a number", // description is a mandatory field of any attribute definition
            "type": "number", // this attribute is of type number
            "minimum": 0, // specifies the minumum value (optional)
            "maximum": 0, // specifies the maximum value (optional)
            "resolution": 0.01, // specifies numbers resolution - value 1 would be mean its an integer (optional)
            "unit": "<unit>" // the <unit> teh value is measured in (optional)
          },
          "<booleanAttribute>": { // defines and option attribute
            "description": "a bool", // description is a mandatory field of any attribute definition
            "type": "boolean"
          },
          "<referenceAttribute>": { // defines and option attribute
            "description": "a reference to another object", // description is a mandatory field of any attribute definition
            "type": "object", // this attribute is of type object (refers to one or nests one)
            "oneOf": [ // a list of references to objects
              {
                "#ref": "medialibrary.videosObject" // the reference to another object is always expressed as <serviceName>.>resourceName>Object
              },
              {
                "#ref": "medialibrary.videosType" // a nested object always expressed as <serviceName>.>resourceName>Type
              }
            ]
          },
          "<arrayOfReferences>": {
            "description": "media collection items", // description is a mandatory field of any attribute definition
            "type": "array", // this attribute is of type array
            "items": { // all the items in the array comply to the definition below
              "type": "object", // this attribute is of type object (refers to one or nests one)
              "oneOf": [ // a list of references to objects
                {
                  "#ref": "medialibrary.videosObject" // the reference to another object is always expressed as <serviceName>.>resourceName>Object
                },
                {
                  "#ref": "medialibrary.videosType" // a nested object always expressed as <serviceName>.>resourceName>Type
                }
              ]
            }
          },
          "<arrayOfIntegers>": {
            "description": "media collection items", // description is a mandatory field of any attribute definition
            "type": "array", // this attribute is of type array
            "items": { // all the items in the array comply to the definition below
              ...
            }
          },
          "<arrayOfNumbers>": {
            "description": "media collection items", // description is a mandatory field of any attribute definition
            "type": "array", // this attribute is of type array
            "items": { // all the items in the array comply to the definition below
              ...
            }
          },
          "<arrayOfBooleans>": {
            "description": "media collection items", // description is a mandatory field of any attribute definition
            "type": "array", // this attribute is of type array
            "items": { // all the items in the array comply to the definition below
              ...
            }
          },
          "<arrayOfStrings>": {
            "description": "media collection items", // description is a mandatory field of any attribute definition
            "type": "array", // this attribute is of type array
            "items": { // all the items in the array comply to the definition below
              ...
            }
          },
          ... // more attribute definitions go here
        },
        "accessMethods": { // describes the access methods on /<service>/<resource>/<element> level, i.e the operations you can perform on the element defined in th `objectModel` property
          "get": { // defines the GET method to be performable on /<service>/<resource>/<element> level
            "parameters": {},
            "usesPermissions": [ // defines which permissions are needed to be present in the auth token to perform the described operation
              "<scope>Read" // A `Read` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaRead
            ]
          },
          "post": { // defines the POST method to be performable on /<service>/<resource>/<element> level
            "description": "Lorem Ipsum", // a te
            "parameters": {
              "properties": {
                "items": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "format": "uri"
                  }
                }
              }
            },
            "usesPermissions": [ // defines which permissions are needed to be present in the auth token to perform the described operation
              "<scope>Write" // A `Write` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaWrite
            ]
          },
          "delete": {
            "parameters": {},
            "usesPermissions": [ // defines which permissions are needed to be present in the auth token to perform the described operation
              "<scope>Write" // A `Write` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaWrite
            ]
          },
          "subscribe": { // defines the subscribe method to be performable on /<service>/<resource>/<element> level
            "parameters": {},
            "usesPermissions": [
              "<scope>Read" // A `Read` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaRead
            ]
          }
        }
      },
      "accessMethods": {
        "post": {
          "description": "media can be any media object. All `encapsulating` media objects like album, playlist etc. will be flattend to root level of mediacollection. E.g. if a playlist contains track A and B, the tracks A and B will be added to the mediacollection. Changing an existing mediaCollectionObject would mean a modification of its `items` property content (e.g. adding or removing items from an existing collection)",
          "parameters": {
            "properties": {
              "items": {
                "isRequired": true,
                "type": "array",
                "items": {
                  "type": "string",
                  "format": "uri"
                }
              }
            }
          },
          "usesPermissions": [
            "mediaWrite"
          ]
        },
        "get": {
          "parameters": {},
          "usesPermissions": [
            "mediaRead"
          ]
        },
        "subscribe": { // defines the subscribe method to be performable on /<service>/<resource>/ level
          "parameters": {},
          "usesPermissions": [
            "<scope>Read" // A `Read` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaRead
          ]
        }
      }
    },
    ... // more resource definitions go here
  }
}

```