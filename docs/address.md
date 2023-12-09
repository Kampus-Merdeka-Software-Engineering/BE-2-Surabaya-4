# Address API SPEC

## Create Address API 

Enpoint : POST /api/contacts/:contactId/address

Header :
- Authorization : token

Request Body :

```json
{
  "streat" : "jalan apa",
  "city" : "jalan apa",
  "province" : "jalan apa",
  "country" : "jalan apa",
  "postal_code" : "jalan apa"
  
}
```

Response Body Success :

```json
{
  "data": {
    "streat" : "jalan apa",
    "city" : "jalan apa",
    "province" : "jalan apa",
    "country" : "jalan apa",
    "postal_code" : "jalan apa"
  }
}
```

Response Body Error :

```json
{
  "errors" :" country is not found"
}
```

## Update Address API 

Enpoint : PUT /api/contacts/:contactId/address/:addressId

Header :
- Authorization : token

Request Body :

```json
{
  "streat" : "jalan apa",
  "city" : "jalan apa",
  "province" : "jalan apa",
  "country" : "jalan apa",
  "postal_code" : "jalan apa"
  
}
```


Response Body Success :

```json
{
  "data": {
    "streat" : "jalan apa",
    "city" : "jalan apa",
    "province" : "jalan apa",
    "country" : "jalan apa",
    "postal_code" : "jalan apa"
  }
}
```

Response Body Error :

```json
{
  "errors" :" country is not found"
}
```


## Get Address API 

Enpoint : GET /api/contacts/:contactId/address/:addressId

Header :
- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id" : 1,
    "streat" : "jalan apa",
    "city" : "jalan apa",
    "province" : "jalan apa",
    "country" : "jalan apa",
    "postal_code" : "jalan apa"
  }
}
```

Response Body Error :

```json
{
  "errors" :" country is not found"
}
```


## List Address API 

Enpoint : GET /api/contacts/:contactId/address

Header :
- Authorization : token

Response Body Success :

```json
{
  "data" : [
    {
      "id" : 1,
      "streat" : "jalan apa",
      "city" : "jalan apa",
      "province" : "jalan apa",
      "country" : "jalan apa",
      "postal_code" : "jalan apa"
  },
    {
      "id" : 2,
      "streat" : "jalan apa",
      "city" : "jalan apa",
      "province" : "jalan apa",
      "country" : "jalan apa",
      "postal_code" : "jalan apa"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors" :" country is not found"
}
```

## Remove Address API 

Enpoint : DELETE /api/contacts/:contactId/address/:addressId

Header :
- Authorization : token

Response Body Success :

```json
{
  "data" : "ok"
}
```

Response Body Error :

```json
{
  "errors" :" country is not found"
}
```
