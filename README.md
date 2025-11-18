# Math Circle API

A simple Express.js API for calculating circle properties.

## Installation

```bash
npm install
```

## Usage

### Start the server

```bash
npm start
```

The server will start on port 3000 by default, or on the port specified by the `PORT` environment variable.

### Run tests

```bash
npm test
```

## API Endpoints

### GET /math/circle/:r

Calculates the area and circumference of a circle given its radius.

#### Parameters

- `r` (path parameter) - The radius of the circle. Must be a positive number.

#### Response

**Success (200 OK)**

Returns a JSON object with the area and circumference, both formatted as strings rounded to 2 decimal places.

```json
{
  "area": "28.27",
  "circumference": "18.85"
}
```

**Error (400 Bad Request)**

Returns an error message if the radius is not a positive number (e.g., zero, negative, or non-numeric).

```json
{
  "error": "radius must be a positive number"
}
```

#### Examples

**Valid request:**
```bash
curl http://localhost:3000/math/circle/3
```

Response:
```json
{
  "area": "28.27",
  "circumference": "18.85"
}
```

**Invalid request (zero radius):**
```bash
curl http://localhost:3000/math/circle/0
```

Response:
```json
{
  "error": "radius must be a positive number"
}
```

**Invalid request (negative radius):**
```bash
curl http://localhost:3000/math/circle/-1
```

Response:
```json
{
  "error": "radius must be a positive number"
}
```

**Invalid request (non-numeric radius):**
```bash
curl http://localhost:3000/math/circle/abc
```

Response:
```json
{
  "error": "radius must be a positive number"
}
```

## Formulas

- **Area**: π × r²
- **Circumference**: 2 × π × r

Where `r` is the radius of the circle and `π` (pi) is approximately 3.14159.
