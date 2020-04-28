const { createReport } = require('./createReport');

const products = [
  {
    name: 'Pizza Calabresa',
    category: 'Pizza',
    price: '2000',
    quantity: '20',
    code: '0001',
  },
  {
    name: 'Pizza Italiana',
    category: 'Pizza',
    price: '2000',
    quantity: '22',
    code: '0002',
  },
  {
    name: 'Burger',
    category: 'Burger',
    price: '0021',
    quantity: '10',
    code: '0003',
  },
  {
    name: 'Coca-Cola',
    category: 'Drink',
    price: '021',
    quantity: '200',
    code: '0004',
  },
  {
    name: 'MilkShake',
    category: 'Drink',
    price: '34',
    quantity: '10',
    code: '0005',
  },
];

createReport(products, '../report.pdf');
