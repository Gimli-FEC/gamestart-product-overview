# Product overview service for GameStart app

This project uses React + Styled Components + Express to deliver video game information to 

## Related Projects

  - [gamestart-reviews](https://github.com/Gimli-FEC/gamestart-reviews)
  - [Jasper-service](https://github.com/Gimli-FEC/Jasper-service)
  - [Proxy](https://github.com/Gimli-FEC/tim-proxy)

## System Requirements

1. Node
2. MySQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Installing

```sh
git clone https://github.com/Gimli-FEC/gamestart-product-overview/
cd gamestart-product-overview
```

Basic project setup from within the root directory:

```sh
npm install
mysql -u root < db/dbSchema.sql
npm run seed
npm run test
npm run production
npm run server-dev
```

To start the development node server:
```sh
npm run server-dev
```
To start React with webpack:
```sh
npm run react-dev
```
