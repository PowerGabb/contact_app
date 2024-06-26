# User API Specification

- Endpoint : POST /api/users 
- Request Body : 

```json 
{
    "name" : "Mencari Website",
    "email" : "Mencari_website@gmail.com",
    "password": "Mencari Website"
}
```
- Response Sucess : 

```json
{
    "errors" : null,
    "message" : "Activation account has been sent to your email",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxxxx",
            "name" : "Mencari Website",
            "email" : "Mencari_website@gmail.com",
        }
    ]
}
``` 
- Response Failed :

```json
{
    "errors" : ["email must be an email", "password cant be empty"],
    "message" : "Process failed",
    "data" : null
}
```

## Email Activation

- Endpoint : POST /api/users/:uuid link button activation
- Response Sucess : 

```json
{
    "errors" : null,
    "message" : "Account has been activated",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxxxx",
            "name" : "Mencari Website",
            "email" : "Mencari_website@gmail.com",
        }
    ]
}
```

- Response Failed :

```json
{
    "errors" : ["Activation has been expired"],
    "message" : "Process failed",
    "data" : null
}
```

## Login Use API

-Endpoint : POST /api/users/login
- Request Body :

```json
{
    "email" : "Mencari_website@gmail.com",
    "password": "Mencari Website"
}
```

- Response Sucess :

```json
{
    "errors" : null,
    "message" : "Login success",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxxxx",
            "name" : "Mencari Website",
            "email" : "Mencari_website@gmail.com",
        }
    ],
    "access_token" : "xxxxxxxxxxxxxxx",
    "refresh_token" : "xxxxxxxxxxxxxxx"
}
```

- Response Failed :

```json
{
    "errors" : ["email or password is wrong"],
    "message" : "Process failed",
    "data" : null
}
```


## Refresh Token Use API

- Endpoint : POST /api/users/refresh
- Header : Authorization : Bearer <access_token>
- Request Body : 

```json
{
    "error:" : null,
    "message" : "Refresh token success",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxxxx",
            "name" : "Mencari Website",
            "email" : "Mencari_website@gmail.com",
        }
    ],
    "access_token" : "xxxxxxxxxxxxxxx",
    "refresh_token" : "xxxxxxxxxxxxxxx"
}
```

- Response Failed :

```json
{
    "errors" : ["Token Not Valid"],
    "message" : "Process failed", 
    "data" : null
}
```

## Get User API
- Endpoint : GET /api/users/:id
- Header : Authorization : Bearer <access_token>
- Request Body : 

- Response Success : 
```json
{
    "errors" : null,
    "message" : "Get user success",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxxxx",
            "name" : "Mencari Website",
            "email" : "Mencari_website@gmail.com",
        }
    ]
}
```

- Response Failed : 
```json
{
    "errors" : ["User Tidak Di Temukan"],
    "message" : "Get User Failed",
    "data" : null,
}
```

## Update User API
- Endpoint : PUT /api/users/:id
- Header : Authorization : Bearer <access_token>
- Request Body :

```json
{
    "name" : "Mencari Website",
    "email" : "Mencari_website@gmail.com",
    "password": "Mencari Website"
}
```

- Response Sucess :
 ```json
{
    "errors" : null,
    "message" : "Update user success",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxxxx",
            "name" : "Mencari Website",
            "email" : "Mencari_website@gmail.com",
        }
    ]
}
```

- Response Error: 
```json
{
    "errors" : ["User not found"],
    "message" : "Process failed",
    "data" : null
}
```

## Delete User API
- Endpoint : DELETE /api/users/:id
- Header : Authorization : Bearer <access_token>
- Request Body :

- Response Sucess : 
```json
{
    "errors" : null,
    "message" : "User deleted succesfuly",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxxxx",
            "name" : "Mencari Website",
            "email" : "Mencari_website@gmail.com",
        }
    ]
}
```

- Response Failed :
```json
{
    "erros" : ["User not found"],
    "message" : "Process failed",
    "data" : null
}
```

