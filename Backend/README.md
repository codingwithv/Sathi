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

## User Login

### Endpoint

```
POST /users/login
```

### Description

Authenticate a user and receive an authentication token.

### Request Body

| Field    | Type   | Description          | Validation                 |
| -------- | ------ | -------------------- | -------------------------- |
| email    | string | User's email address | Must be valid email format |
| password | string | User's password      | Min 6 characters           |

### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "securepass123"
}
```

### Responses

#### Success Response

**Code:** 200 OK

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

**Code:** 401 UNAUTHORIZED

```json
{
  "message": "Invalid credentials"
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
- **Password**: Minimum 6 characters

### Authentication

After successful login, use the returned token in subsequent requests:

```
Authorization: Bearer <token>
```

## Get User Profile

### Endpoint

```
GET /users/profile
```

### Description

Retrieve the authenticated user's profile information.

### Authentication Required

Yes. Send token in Authorization header:

```
Authorization: Bearer <token>
```

### Responses

#### Success Response

**Code:** 200 OK

```json
{
  "_id": "60d3b41ef3f4d52b9c43a123",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Error Responses

**Code:** 401 UNAUTHORIZED

```json
{
  "message": "Authentication required"
}
```

**Code:** 500 INTERNAL SERVER ERROR

```json
{
  "message": "Internal server error"
}
```

## User Logout

### Endpoint

```
GET /users/logout
```

### Description

Logout the currently authenticated user. This will invalidate the current token and clear the session cookie.

### Authentication Required

Yes. Send token in Authorization header:

```
Authorization: Bearer <token>
```

### Responses

#### Success Response

**Code:** 200 OK

```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses

**Code:** 401 UNAUTHORIZED

```json
{
  "message": "Authentication required"
}
```

**Code:** 500 INTERNAL SERVER ERROR

```json
{
  "message": "Internal server error"
}
```

# Captain API Documentation

## Captain Registration

### Endpoint

```
POST /captains/register
```

### Description

Register a new captain in the system. Creates a captain account with vehicle details and returns an authentication token.

### Request Body

| Field               | Type   | Description                    | Validation                             |
| ------------------- | ------ | ------------------------------ | -------------------------------------- |
| email               | string | Captain's email address        | Must be valid email format             |
| fullname            | object | Captain's full name            | -                                      |
| fullname.firstname  | string | Captain's first name           | Min 3 characters                       |
| fullname.lastname   | string | Captain's last name (optional) | Min 3 characters if provided           |
| password            | string | Captain's password             | Min 6 characters                       |
| vehicle             | object | Vehicle details                | -                                      |
| vehicle.color       | string | Vehicle color                  | Min 3 characters                       |
| vehicle.plate       | string | Vehicle plate number           | Min 3 characters                       |
| vehicle.capacity    | number | Vehicle passenger capacity     | Must be a number                       |
| vehicle.vehicleType | string | Type of vehicle                | Must be "car", "motorcycle", or "auto" |

### Example Request

```json
{
  "email": "captain.john@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "password": "securepass123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success Response

**Code:** 201 CREATED

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "captain": {
    "_id": "60d3b41ef3f4d52b9c43a124",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "captain.john@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
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

**Code:** 400 BAD REQUEST

```json
{
  "message": "All fields are required"
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
- **Vehicle Color**: Minimum 3 characters
- **Vehicle Plate**: Minimum 3 characters
- **Vehicle Capacity**: Must be a number
- **Vehicle Type**: Must be one of: "car", "motorcycle", "auto"

### Authentication

After successful registration, use the returned token in subsequent requests:

```
Authorization: Bearer <token>
```

## Captain Login

### Endpoint

```
POST /captains/login
```

### Description

Authenticate a captain and receive an authentication token.

### Request Body

| Field    | Type   | Description             | Validation                 |
| -------- | ------ | ----------------------- | -------------------------- |
| email    | string | Captain's email address | Must be valid email format |
| password | string | Captain's password      | Min 6 characters           |

### Example Request

```json
{
  "email": "captain.john@example.com",
  "password": "securepass123"
}
```

### Responses

#### Success Response

**Code:** 200 OK

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "captain": {
    "_id": "60d3b41ef3f4d52b9c43a124",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "captain.john@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Responses

**Code:** 401 UNAUTHORIZED

```json
{
  "message": "Captain not found"
}
```

```json
{
  "message": "Invalid password"
}
```

## Get Captain Profile

### Endpoint

```
GET /captains/profile
```

### Description

Retrieve the authenticated captain's profile information.

### Authentication Required

Yes. Send token in Authorization header:

```
Authorization: Bearer <token>
```

### Responses

#### Success Response

**Code:** 200 OK

```json
{
  "captain": {
    "_id": "60d3b41ef3f4d52b9c43a124",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "captain.john@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Responses

**Code:** 401 UNAUTHORIZED

```json
{
  "message": "Captain not found"
}
```

## Captain Logout

### Endpoint

```
GET /captains/logout
```

### Description

Logout the currently authenticated captain. This will invalidate the current token and clear the session cookie.

### Authentication Required

Yes. Send token in Authorization header:

```
Authorization: Bearer <token>
```

### Responses

#### Success Response

**Code:** 200 OK

```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses

**Code:** 401 UNAUTHORIZED

```json
{
  "message": "Authentication required"
}
```
