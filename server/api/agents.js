export default defineEventHandler(() => {
  const agents = [
    {
      id: 1,
      name: 'Дмитрий Хитрый',
      image: '/images/agent-default.png',
      documentsVerified: true,
      rating: 4.3,
      reviews: '19 отзывов',
      description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...',
    },
    {
      id: 2,
      name: 'Аполлинарий Землеперекопский',
      image: '/images/agent-default.png',
      documentsVerified: true,
      rating: null,
      reviews: 'Нет отзывов',
      description: 'Помог справиться с потерей и организовать похороны для 126 семей...',
    },
    {
      id: 3,
      name: 'Фёдор Сумкин',
      image: '/images/agent-default.png',
      documentsVerified: false,
      rating: 4.3,
      reviews: '19 отзывов',
      description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...',
    },
    {
      id: 4,
      name: 'Василий Копушин',
      image: '/images/agent-default.png',  
      documentsVerified: true,
      location: 'Ростов на Дону',
      rating: 4.3,
      reviews: '19 отзывов',
      description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...',
    },
    {
      id: 5,
      name: 'Феофан Кусакин',
      image: '/images/agent-default.png',  
      documentsVerified: false,
      location: 'Ростов на Дону',
      rating: 4.3,
      reviews: '19 отзывов',
      description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...',
    },
    {
      id: 6,
      name: 'Василиса Землеперекопская',
      image: '/images/agent-default.png',  
      documentsVerified: true,
      location: 'Ростов на Дону',
      rating: 4.3,
      reviews: '19 отзывов',
      description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...',
    },
  ];

  return agents;
})