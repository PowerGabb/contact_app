# Address API Specification
## Create Address API
- Endpoint : POST /api/address
- Header : Authorization : Bearer <access_token>
- Request Body :
```json
{
    "addressType" : "Home",
    "street"      : "Jl. Raya",
    "city"        : "Jakarta",
    "province"    : "DKI Jakarta",
    "country"     : "Indonesia",
    "zipCode"     : "12345",
    "contactId"   : "xxxxxxxxxxxxxxx"
}
```

- Response Success : 
```json
{
    "errors" : null,
    "message" : "Create Address Successfuly",
    "data" : {
        "id" : 1,
        "addressType" : "Home",
        "street" : "Jl. Raya",
        "city" : "Jakarta",
        "province" : "DKI Jakarta",
        "country" : "Indonesia",
        "zipCode" : "12345",
        "contactId" : "xxxxxxxxxxxxxxx"
    }
}
```

- Response Error :
```json
{
    "errors" : ["Address cannot be null"],
    "message" : "Create Address Failed",
    "data" : null
}
```

## Get All Address API
- Endpoint : GET /api/address
- Header : Authorization : Bearer <access_token>
- Request Body: 
```json
{
    "errors" : null,
    "message" : "Get All Address Successfuly",
    "data" : [
        {
            "id" : 1,
            "addressType" : "Home",
            "street" : "Jl. Raya",
            "city" : "Jakarta",
            "province" : "DKI Jakarta",
            "country" : "Indonesia",
            "zipCode" : "12345",
            "contactId" : "xxxxxxxxxxxxxxx"
        }
    ]
}
```

- Response Error :
```json
{
    "errors" : ["Address not found"],
    "message" : "Get All Address Failed",
    "data" : null
}
```

## Get Address By Id API
- Endpoint : GET /api/address/:id
- Header : Authorization : Bearer <access_token>
- Request Body: 

- Response Success :
```json
{
    "errors" : null,
    "message" : "Get Address Successfuly",
    "data" : {
        "id" : 1,
        "addressType" : "Home",
        "street" : "Jl. Raya",
        "city" : "Jakarta",
        "province" : "DKI Jakarta",
        "country" : "Indonesia",
        "zipCode" : "12345",
        "contactId" : "xxxxxxxxxxxxxxx"
    }
}
```

- Response Error :
```json
{
    "errors" : ["Address not found"],
    "message" : "Get Address Failed",
    "data" : null
}
```

## Update Address API
- Endpoint : PUT /api/address/:id
- Header : Authorization : Bearer <access_token>
- Request Body:
```json
{
    "addressType" : "Home",
    "street"      : "Jl. Raya",
    "city"        : "Jakarta",
    "province"    : "DKI Jakarta",
    "country"     : "Indonesia",
    "zipCode"     : "12345",
    "contactId"   : "xxxxxxxxxxxxxxx"
}
```

- Response Success :
```json
{
    "errors" : null,
    "message" : "Update Address Successfuly",
    "data" : {
        "id" : 1,
        "addressType" : "Home",
        "street" : "Jl. Raya",
        "city" : "Jakarta",
        "province" : "DKI Jakarta",
        "country" : "Indonesia",
        "zipCode" : "12345",
        "contactId" : "xxxxxxxxxxxxxxx"
    }
}
```

- Response Error :
```json
{
    "errors" : ["Address cannot be null"],
    "message" : "Update Address Failed",
    "data" : null
}
```

## Delete Address By ID API
- Endpoint : DELETE /api/address/:id
- Header : Authorization : Bearer <access_token>
- Request Body: 

- Response Success :
```json
{
    "errors" : null,
    "message" : "Delete Address Successfuly",
    "data" : {
        "id" : 1,
        "addressType" : "Home",
        "street" : "Jl. Raya",
        "city" : "Jakarta",
        "province" : "DKI Jakarta",
        "country" : "Indonesia",
        "zipCode" : "12345",
        "contactId" : "xxxxxxxxxxxxxxx"
    }
}
```

- Response Error :
```json
{
    "errors" : ["Address not found"],
    "message" : "Delete Address Failed",
    "data" : null
}
```