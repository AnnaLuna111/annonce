export default defineEventHandler(() => {
  const products = [
    {
      id: 1,
      title: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
      price: '3 285 000',
      image: '/images/product-default.png',
      status: true,
      isPromoted: true,
    },
    { 
      id: 2,
      title: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
      price: '3 285 000',
      image: '/images/product-default.png',
      status: false,
      isPromoted: false,
    },
    {
      id: 3,
      title: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
      price: '3 285 000',
      image: '/images/product-default.png',
      status: false,
      isPromoted: true,
    },
    {
      id: 4,
      title: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
      price: '3 285 000',
      image: '/images/product-default.png',
      status: true,
      isPromoted: false,
    }
  ];

  return products
})