# GameStart: Product Overview Service

This project uses React + Styled Components + Express to deliver product information to customers.  This service is a custom react photo carousel component with zoom and movement control on the main image.  The ratings stars component implements a custom tooltip on mouseover.  New and Pre-Owned selections are customized radio buttons.

<img width="1310" alt="image" src="https://user-images.githubusercontent.com/2312703/84603332-7c9d9c80-ae42-11ea-8702-594300c770cb.png">


## Related Projects

  - [gamestart-reviews](https://github.com/Gimli-FEC/gamestart-reviews)
  - [Jasper-service](https://github.com/Gimli-FEC/Jasper-service)
  - [Proxy](https://github.com/Gimli-FEC/tim-proxy)

## System Requirements

1. Node (12.16.1)
2. MySQL (5.7)

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
