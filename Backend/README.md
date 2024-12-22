# API Documentation

## User Registration

### Endpoint

```
POST /users/register
```

### Description

Register a new user in the system. Creates a user account and returns an authentication token.

### Request Body

| Field              | Type   | Description                 | Validation                   |
| ------------------ | ------ | --------------------------- | ---------------------------- |
| email              | string | User's email address        | Must be valid email format   |
| fullname           | object | User's full name            | -                            |
| fullname.firstname | string | User's first name           | Min 3 characters             |
| fullname.lastname  | string | User's last name (optional) | Min 3 characters if provided |
| password           | string | User's password             | Min 6 characters             |

### Example Request

```json
{
  "email": "john.doe@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepass123"
}
```

### Responses

#### Success Response

**Code:** 201 CREATED

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "60d3b41ef3f4d52b9c43a123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

**Code:** 400 BAD REQUEST

```json
{
  "errors": [
    {
      "msg": "Email is not valid",
      "param": "email"
    }
  ]
}
```

**Code:** 500 INTERNAL SERVER ERROR

```json
{
  "message": "Internal server error"
}
```

### Field Validations

- **Email**: Must be a valid email format
- **First Name**: Minimum 3 characters
- **Password**: Minimum 6 characters
- **Last Name**: Optional, but if provided must be minimum 3 characters

### Authentication

After successful registration, use the returned token in subsequent requests:

```
Authorization: Bearer <token>
```