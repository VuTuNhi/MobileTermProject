import { types } from 'mobx-state-tree';
import { ProductModel } from '../models/Product';
const productsStore = types
  .model('ProductsStore', {
    data: types.array(types.reference(ProductModel)),
  })
  .create({
    data: [
      ProductModel.create({
        id: '1',
        name: 'FRESH CREAM PIECE CAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/08/piece-cake-31.jpg',
        price: 45000,
        describ: 'Fresh cream cake topped with sweet seasonal fruits',
      }),
      ProductModel.create({
        id: '9',
        name: 'SPOONABLE TIRAMISU CAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/08/piece-cake-23.jpg',
        price: 48000,
        describ:
          'A spoonful of joy! Soft tiramisu cake that you can eat with your spoon',
      }),
      ProductModel.create({
        id: '10',
        name: 'SPOONABLE STRAWBERRY CHEESECAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/08/piece-cake-22.jpg',
        price: 48000,
        describ:
          'A spoonful of joy! Soft strawberry cheesecake with crumble that you can eat with your spoon',
      }),
      ProductModel.create({
        id: '2',
        name: 'SWEET POTATO MOUSSE PIECE CAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/08/piece-cake-33.jpg',
        price: 45000,
        describ: 'Sweet potato mousse cake made with fresh cream',
      }),
      ProductModel.create({
        id: '3',
        name: 'BLUEBERRY YOGURT FRESH CREAM PIECE CAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/08/piece-cake-35.jpg',
        price: 48000,
        describ: 'Soft and fruity cake made with yogurt fresh cream',
      }),
      ProductModel.create({
        id: '4',
        name: 'CHOCOLATE FRESH CREAM PIECE CAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/08/piece-cake-25.jpg',
        price: 48000,
        describ:
          'Sweet and soft fresh cream layered chocolate cake decorated with fresh berries and seasonal fruits',
      }),
      ProductModel.create({
        id: '5',
        name: 'TRIPLE DELIGHT COFFEE PIECE CAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/08/piece-cake-20.jpg',
        price: 50000,
        describ:
          'Chocolate and white sponge layered cake frosted with light fresh cream made with real coffee',
      }),
      ProductModel.create({
        id: '6',
        name: 'GREEN TEA ROLL CAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/08/original-roll.png',
        price: 120000,
        describ: 'Soft green tea cake with light cream',
      }),
      ProductModel.create({
        id: '7',
        name: 'FRUIT PASTRY',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/09/pastry-11.jpg',
        price: 25000,
        describ: 'Crumble and crunchy puff pastry with fresh fruits',
      }),
      ProductModel.create({
        id: '8',
        name: 'CHEESECAKE',
        imageUrl:
          'https://www.tljus.com/wp-content/uploads/2018/01/cake-31.jpg',
        price: 45000,
        describ:
          'Creamy New York cheesecake topped with fresh cream and strawberries',
      }),
    ],
  });
export default productsStore;
