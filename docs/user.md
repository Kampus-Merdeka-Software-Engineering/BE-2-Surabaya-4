# user API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username" : "chairul",
  "password" : "rahasia",
  "name"     : "Chairul Yusuf"
}
```

Response Body Success :

```json
{
  "data" : {
    "username" : "chairul",
    "name"     : "Chairul Yusuf"
  }
}
```

Response Body Errors:

```json
{
  "errors": "username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username" : "chairul",
  "password" : "rahasia"
}
```

Response Body Success :

```json
{
  "data" : {
    "token" : "unique-token"
  }
}
```

Response Body Errors:

```json
{
  "errors": "username or password wrong"
}
```

## Update User API

Endpoint : POST /api/users/current

Headers :
- Authorization : token

Request Body :

```json
{
  "name" : "Chairul Yusuf",
  "password" : "new Password"
}
```

Response Body Success :

```json
{
  "username" : "chairul",
  "name" : " Chairul Yusuf"
}
```

Response Body Errors:

```json
{
  "errors": "name lengt max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success :

```json
{
  "username" : "chairul",
  "name" : " Chairul Yusuf"
}
```

Response Body Errors:

```json
{
  "errors": "unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : "ok"
}
```

Response Body Errors:

```json
{
  "errors": "unauthorized"
}
```