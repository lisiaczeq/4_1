# Math API

## Overview
A simple Express.js API that provides mathematical calculations for geometric shapes.

## Current State
The server is running and operational on port 5000 with the following endpoints implemented:
- Root endpoint (`/`) - API documentation and available endpoints
- Circle calculations (`/math/circle/:r`) - Returns area and circumference
- Rectangle calculations (`/math/rectangle/:width/:height`) - Returns area and perimeter

## Recent Changes
**November 18, 2025**
- Completed TODO1: Implemented circle calculation endpoint with area and circumference
- Completed TODO2: Added rectangle calculation endpoint
- Completed TODO3: Added root endpoint with API information
- Changed server port from 3000 to 5000 for Replit webview compatibility
- Installed npm dependencies (Express.js)
- Configured and verified server is running successfully

## Project Architecture
- **Framework**: Express.js (Node.js)
- **Entry Point**: `index.js`
- **Port**: 5000 (development)
- **Dependencies**: 
  - express: ^4.21.0
  - @types/node: ^18.0.6

## API Endpoints

### GET /
Returns information about available API endpoints.

### GET /math/circle/:r
Calculates circle properties based on radius.
- **Parameters**: `r` (radius, must be a positive number)
- **Returns**: JSON object with `area` and `circumference`
- **Example**: `/math/circle/5` returns `{"area":78.54,"circumference":31.42}`

### GET /math/rectangle/:width/:height
Calculates rectangle properties based on dimensions.
- **Parameters**: 
  - `width` (must be a positive number)
  - `height` (must be a positive number)
- **Returns**: JSON object with `area` and `perimeter`
- **Example**: `/math/rectangle/4/6` returns `{"area":24,"perimeter":20}`

## Error Handling
All endpoints validate input parameters and return appropriate error messages for:
- Invalid numbers (NaN)
- Negative values
- Missing parameters
