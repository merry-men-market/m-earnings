# MerryMenMarket-Earnings

> Project description

## Related Projects

  - https://github.com/merry-men-market/stockChartServiceComponent
  - https://github.com/merry-men-market/buy-form
  - https://github.com/merry-men-market/price-paid-average

## Table of Contents

  1. [Requirements](#requirements)
  2. [Development](#development)
  3. [CRUD Routes](#crud_routes)

## Requirements

  - Node 8.15.1

## Development

### Installing Dependencies

From within the subdirectory:

```sh
npm install
npm run webpack-server
npm run earning:setup
npm run webpack-client
```

## CRUD Routes

| CRUD Operation | API | Notes |
|----------------|:---:| ----- |
| CREATE | /api/earnings |
| READ | /api/earnings/:id | If a specific id is not desired, /:id can be dropped from the api route|
| UPDATE | /api/earnings/:id | If a specific id is not desired, /:id can be dropped from the api route|
| DELETE | /api/earnings/:id | If a specific id is not desired, /:id can be dropped from the api route|