# Contact API Spec

## Create Contact API

Endpoint : POST /api/contact

Header :
- Authorization : token 

Request Body :

```json
{
  "first_name" : "chairul",
  "last_name" : "yusuf",
  "email" : "chairul@gmail.com",
  "phone" : "23987649823"
}
```

Response Body Success:

```json
{
  "data": {
    "id" : 1,
    "first_name" : "chairul",
    "last_name" : "yusuf",
    "email" : "chairul@gmail.com",
    "phone" : "23987649823"
  }
}
```

Response Body Error:

```json
{
  "errors" : "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contact/:id

Header :
- Authorization : token

Request Body :

```json
{
  "first_name" : "chairul",
  "last_name" : "yusuf",
  "email" : "chairul@gmail.com",
  "phone" : "23987649823"
}
```

Response Body Success:

```json
{
  "data": {
    "id" : 1,
    "first_name" : "chairul",
    "last_name" : "yusuf",
    "email" : "chairul@gmail.com",
    "phone" : "23987649823"
  }
}
```

Response Body Error:

```json
{
  "errors" : "Email is not valid format"
}
```

## GET Contact API

Endpoint : GET /api/contact/:id

Header :
- Authorization : token

Response Body Success:
```json
{
  "data": {
    "id" : 1,
    "first_name" : "chairul",
    "last_name" : "yusuf",
    "email" : "chairul@gmail.com",
    "phone" : "23987649823"
  }
}
```

Response Body Error:

```json
{
  "errors" : "contact is not found"
}
```

## Search Contact API

Endpoint : GET /api/contact

Header :
- Authorization : token

Query Params :
- name : search by first_name or last_name, using like ,optional
- email : search by email using like, optional
- phone : search by phone using like, optional
- page : number of page, default 1
- size : size of page, default 10

Response Body Success:

```json
{
  "data": [
    {
    "id" : 1,
    "first_name" : "chairul",
    "last_name" : "yusuf",
    "email" : "chairul@gmail.com",
    "phone" : "23987649823"
  },
    {
      "id" : 1,
      "first_name" : "chairul",
      "last_name" : "yusuf",
      "email" : "chairul@gmail.com",
      "phone" : "23987649823"
    }
  ],
  "paging" : {
    "page" : 1,
    "total_page" :3,
    "total_item" : 30
  }
}
```

Response Body Error:

## Remove Contact API

Endpoint : DELETE /api/contact

Header :
- Authorization : token

Response Body Success:

```json
{
  "data": "ok"
}
```

Response Body Error:

```json
{
  "errors" : "contact is not found"
}
```