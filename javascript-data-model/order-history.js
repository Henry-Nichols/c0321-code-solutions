var item = {
  title: String,
  author: String,
  image: String,
  price: Number,
  returnWindow: Date
};

var order = {
  items: [item],
  orderId: String,
  orderDate: Date,
  orderTotal: Number,
  shipTo: String,
  deliveryDate: Date,
  deliveryNotes: String
};

var orderHistory = [
  {
    order: {
      items: [
        {
          title: 'JavaScript for impatient programmers',
          author: 'Rauschmayer, Dr.Axel',
          image: '',
          price: '$' + 31.55,
          returnWindow: new Date(2020, 8, 7)
        }
      ],
      orderId: '114-3941689-8772232',
      orderDate: new Date(2020, 7, 4),
      orderTotal: '$' + 34.00,
      shipTo: 'JS Masher',
      deliveryDate: new Date(2020, 7, 8),
      deliveryNotes: ''
    }
  },
  {
    order: {
      items: [
        {
          title: 'The Timeless Way of Building',
          author: 'Alexander, Christopher',
          image: '',
          price: '$' + 41.33,
          returnWindow: new Date(2020, 7, 19)
        }
      ],
      orderId: '113-9984268-1280257',
      orderDate: new Date(2020, 6, 19),
      orderTotal: '$' + 44.53,
      shipTo: 'JS Masher',
      deliveryDate: new Date(2020, 6, 20),
      deliveryNotes: 'Your package was delivered. It was handed directly to a resident.'
    }
  },
  {
    order: {
      items: [
        {
          title: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
          author: '',
          image: '',
          price: '$' + 15.98,
          returnWindow: new Date(2020, 7, 5)
        }
      ],
      orderId: '114-2875557-9059409',
      orderDate: new Date(2020, 6, 4),
      orderTotal: '$' + 17.22,
      shipTo: 'JS Masher',
      deliveryDate: new Date(2020, 6, 7)
    }
  },
  {
    order: {
      items: [
        {
          title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
          author: '',
          image: '',
          price: '$' + 94.95,
          returnWindow: new Date(2020, 7, 4)
        },
        {
          title: 'The Art of Sql',
          author: 'Faroult, Stephane',
          price: '$' + 33.99,
          returnWindow: new Date(2020, 7, 4)
        }
      ],
      orderId: '113-2883177-2648248',
      orderDate: new Date(2020, 6, 3),
      orderTotal: '$' + 138.93,
      shipTo: 'JS Masher',
      deliveryDate: new Date(2020, 6, 5)
    }
  }
];
