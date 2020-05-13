module.exports = {
  get: (url) => {
    if (url.includes('images')) {
      return Promise.resolve({
        data: [
          {
            id: 1,
            url: 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/500.jpeg',
          },
          {
            id: 2,
            url: 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/499.jpeg',
          },
          {
            id: 3,
            url: 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/498.jpeg',
          },
          {
            id: 4,
            url: 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/497.jpeg',
          },
          {
            id: 5,
            url: 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/496.jpeg',
          },
        ],
      });
    } else if (url.includes('reviews')) {
      return Promise.resolve({
        data:
          {
            id: 1,
            product_id: 1,
            overallRating: 3,
            totalReviews: 1871,
            stars1: 419,
            stars2: 323,
            stars3: 375,
            stars4: 265,
            stars5: 489
          }
      });
    } else {
    return Promise.resolve({
      data:
        {
          info: {
            id: 1,
            title: 'Practical Wooden Pants',
            publisher: 'Schuppe, Klocko and Kirlin',
            content_rating: 6,
            priceNew: 79.79,
            priceUsed: 39.31,
            currentStockNew: 3,
            currentStockUsed: 2,
          },
          esrb: {
            name: 'adults-only',
            url: 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/esrb/6.png',
          },
        },
    });
    }
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
