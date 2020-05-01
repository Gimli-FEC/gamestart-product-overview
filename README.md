# Module 1: The product/order overview service for GameStart

> This service contains the fullstack code for the image viewer component and the overview/order component of the GameStart app.

## Related Projects

  - https://github.com/Gimli-FEC/gamestart-reviews
  - https://github.com/Gimli-FEC/Jasper-service
  - https://github.com/Gimli-FEC/proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This repo only contains the front & back end for the components specified above.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node > 6.13.0
- Webpack + Babel
- React / React-Dom > 16
- MySQL

## Development

### Installing Dependencies

Basic project setup from within the root directory:

```sh
npm install
mysql -u root < db/dbSchema.sql
npm run seed
```

To start the development node server:
```sh
npm run server-dev
```
To start React with webpack:
```sh
npm run react-dev
```
