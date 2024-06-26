# Contact API 

## Create Contact API

- Endpoint : POST /api/contacts
- Header : Authorization : Bearer <access_token>
- Request Body : 
```json
{
    "firstName" : "Mencari",
    "lastName"  : "Website",
    "email"     : "1lQp8@example.com",
    "phone"     : "081234567890",
    "address"   : [
        {
            "addressType" : "Home",
            "street"      : "Jl. Raya",
            "city"        : "Jakarta",
            "province"    : "DKI Jakarta",
            "country"     : "Indonesia",
            "zipCode"     : "12345",
            "contactId"   : "xxxxxxxxxxxxxxx"

        }
    ]
}
```

- Response Success : 
```json
{
    "errors" : null,
    "message" : "Contact has been created",
    "data" : [
        {
            "firstName" : "Mencari",
            "lastName"  : "Website",
            "fullName"  : "Mencari Website", 
            "email"     : "1lQp8@example.com",
            "phone"     : "081234567890",
            "address"   : [
                {
                    "addressType" : "Home",
                    "street"      : "Jl. Raya",
                    "city"        : "Jakarta",
                    "province"    : "DKI Jakarta",
                    "country"     : "Indonesia",
                    "zipCode"     : "12345",
                    "contactId"   : "xxxxxxxxxxxxxxx"
        }
    ],
    "userId" : "xxxxxxxxxxxxxxx"
}
```

- Response Error : 
```json
{
    "errors" : ["name cannot be null", "email cant be empty"],
    "message" : "Contact failed to created",
    "data" : null
}
```

## Search Contact API

- Endpoint : GET /api/contacts
- Header : Authorization : Bearer <access_token>
- Request Body: 
```json
{
    "search" : "value",

}
```

- Response Success : 
```json
{
 "errors"   : null,
 "message"  : "get contact berhasil",
 "data"     : [
    {
        "id" : 1,
        "firstName"     : "Mencari",
        "lastName"      : "Website",
        "fullName"      : "Mencari Website",
        "email"         : "mencari_website@gmail.com",
        "phone"         : "11235426543",
        "userId"        : "xxxxxxxxxxxxxxx",
        "address"       : [
            {
                "id" : 1,
                "addressType": "Home",
                "street": "Jl. Jalan",
                "city": "Jakarta",
                "province" : "Jawa Barat",
                "country" : "Indonesia",
                "zipCode" : "16820",
                "contactId" : 1
            },
            {
                "id" : 2,
                "addressType": "Kantor",
                "street": "Jl. Lebak Bulus",
                "city": "Jakarta",
                "province" : "Jawa Barat",
                "country" : "Indonesia",
                "zipCode" : "16820",
                "contactId" : 1
            }
        ]      
    }
 ]
}
```

- Response Error :

```json
{
    "errors" : ["Contact Not Found"],
    "message" : "Get Contact Failed",
    "data" : null 
}
```

## Get Contact API

- Endpoint : GET /api/contact/:id
- Header : Authorization : Bearer <access_token>
- Request Body : 

- Response Success :
```json
{
 "errors"   : null,
 "message"  : "get contact berhasil",
 "data"     : [
    {
        "id" : 1,
        "firstName"     : "Mencari",
        "lastName"      : "Website",
        "fullName"      : "Mencari Website",
        "email"         : "mencari_website@gmail.com",
        "phone"         : "11235426543",
        "userId"        : "xxxxxxxxxxxxxxx",
        "address"       : [
            {
                "id" : 1,
                "addressType": "Home",
                "street": "Jl. Jalan",
                "city": "Jakarta",
                "province" : "Jawa Barat",
                "country" : "Indonesia",
                "zipCode" : "16820",
                "contactId" : 1
            },
        ]      
    }
 ]
}
```

- Response Failed : 
```json
{
    "errors" : ["Contact Not Found"],
    "message" : "Get Contact Failed",
    "data" : null
}
```

## Updated Contact API

- Endpoint : PUT /api/contact/:id
- Header : Authorization : Bearer <access_token>
- Request Body :
```json
{
    "firstName" : "Mencari",
    "lastName"  : "Website",
    "email"     : "1lQp8@example.com",
    "phone"     : "081234567890",
}
```

- Response Success 
```json
{
    "errors" : null,
    "message" : "Update Contact Successfuly",
    "data" : {
        "id" : 1,
        "firstName" : "Mencari",
        "lastName" : "Website",
        "fullName" : "Mencari Website",
        "email" : "mencari_website@gmail.com",
        "phone" : "13122541",
        "userId" : "xxxxxxxxxxxxxxxx"
    }
}
```

- Response Error : 
```json
{
    "errors" : ["Contact Not Found"],
    "message" : "Update Contact Failed",
    "data" : null
}
```

## Delete Contact API

- Endpoint : DELETE /api/contact/:id
- Header : Authorization : Bearer <access_token>
- Request Body :
- Response Success :
```json
{
    "errors" : null,
    "message" : "Delete Contact Successfuly",
    "data" : {
        "id" : 1,
        "firstName" : "Mencari",
        "lastName" : "Website",
        "fullName" : "Mencari Website",
        "email" : "mencari_website@gmail.com",
        "phone" : "13122541",
    }
}
```

- Response Error :
```json
{
    "errors" : ["Contact Not Found"],
    "message" : "Delete Contact Failed",
    "data" : null
}
```