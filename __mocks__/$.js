module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 496,
          url: "https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/5.jpeg"
        },
        {
          id: 497,
          url: "https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/4.jpeg"
        },
        {
          id: 498,
          url: "https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/3.jpeg"
        },
        {
          id: 499,
          url: "https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/2.jpeg"
        },
        {
          id: 500,
          url: "https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/1.jpeg"
        },
      ],
    });
  },
};

/*
switch (url) {
  case '/images/':
  case '/':
    return Promise.resolve({
      data: {
        info: {
          id: 1,
          title: "Incredible Steel Car",
          publisher: "Feest - Schiller",
          content_rating: 7,
          userRating: 2.5,
          priceNew: 68.85,
          priceUsed: 31.05,
          currentStockNew: 3,
          currentStockUsed: 0,
        },
        esrb: {
          name: "rating-pending",
          url: "https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/esrb/7.png"
        },
      },
    });

  default:
    return Promise.reject(
*/
