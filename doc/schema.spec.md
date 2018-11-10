# JSON Schema V2 Specification

The JSON schema is a formal description of services defined for the RSI (formerly viwi) framework [https://www.w3.org/Submission/viwi-protocol/](https://www.w3.org/Submission/viwi-protocol/)

## Providing schema definiztions

In order to make definitions availabe to others and let them by easily be used in other projects, maintaining an npm package is recommended.

### The package structure

```bash
rsi.service.<servicename> $ tree -a
.
├── .gitattributes
├── .gitignore
├── README.md
├── doc
│   ├── ...
├── package.json
└── src
    └── schema.json
```

contents as follows:

* the actual service definition in  src/schema.json
* a package.json file holding meta data and dependencies
* a doc folder for detaileld documentation (e.g. workflow diagrams etc.)
* a general README.md

## JSON structure of a service definition

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
          "<numberAttribute>": { // defines and option attribute
            "description": "a number", // description is a mandatory field of any attribute definition
            "type": "number", // this attribute is of type number
            "resolution": 0.01, // specifies numbers resolution - value 1 dexfribes an integer
            "minimum": 0, // specifies the minumum value (optional)
            "maximum": 0, // specifies the maximum value (optional)
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
          "post": { // defines the POST method to be performable on /<service>/<resource>/<element> level to mdoify an element
            "description": "Lorem Ipsum", // a te
            "parameters": { // holds all all the attributes being able to be modified via POST
              "<stringAttribute>": { // makes the <stringAttribute> available for modification
                "isRequired": true, // marks the attribute to be required on each request (optional)
                "type": "string"
              }
            },
            "usesPermissions": [ // defines which permissions are needed to be present in the auth token to perform the described operation
              "<scope>Write" // A `Write` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaWrite
            ]
          },
          "delete": { // defines the DELETE method to be performable on /<service>/<resource>/<element> level to delete an element
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
        "post": { // defines the POST method to be performable on /<service>/<resource>/ level, i.e creat new elements (server side id)
          "description": "Lorem Ipsum amet sit",
          "parameters": { // holds all the attributes being able to be given when creating new elements via POST
            "<stringAttribute>": { // makes the <stringAttribute> available for creation
              "isRequired": true, // marks the attribute to be required on each request (optional)
              "type": "string"
            }
          },
          "usesPermissions": [
            "<scope>Write" // A `Write` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaWrite
          ]
        },
        "put": { // defines the PUT method to be performable on /<service>/<resource>/ level, i.e create new elements letting the client decide about the id/name of the element (rarely used)
          "description": "Lorem Ipsum amet sit",
          "parameters": { // holds all the attributes being able to be given when creating new elements via PUT
            "<stringAttribute>": { // makes the <stringAttribute> available for creation
              "isRequired": true, // marks the attribute to be required on each request (optional)
              "type": "string"
            }
          },
          "usesPermissions": [
            "<scope>Write" // A `Write` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaWrite
          ]
        },
        "get": {
          "parameters": {
            // holds all the attributes that can be used with the $sortBy parameter
            "<stringAttribute>": { // makes the <stringAttribute> available for sorting
              "type": "string"
            }
          },
          "usesPermissions": [
            "<scope>Read" // A `Read` level permission is needed. <scope> describes and abstract scope, e.g. media => mediaRead
          ]
        },
        "subscribe": { // defines the subscribe method to be performable on /<service>/<resource>/ level
          "parameters": {// holds all the attributes that can be used with the $sortBy parameter
            "<stringAttribute>": { // makes the <stringAttribute> available for sorting
              "type": "string"
            }
          },
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