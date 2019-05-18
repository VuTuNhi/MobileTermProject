import { types } from 'mobx-state-tree';
import shoppingCartStore from '../stores/Cart';
export const ProductModel = types
  .model('ProductModel', {
    id: types.identifier,
    name: types.string,
    imageUrl: types.string,
    price: types.number,
    describ: types.string,
    cartQty: 0,
    inCart: false,
  })
  .views(self => ({
    get totalPrice() {
      return self.cartQty * self.price;
    },
  }))
  .actions(self => ({
    incCartQty() {
      self.cartQty += 1;
    },
    decCartQty() {
      self.cartQty -= 1;
    },
    addToCart() {
      shoppingCartStore.addProduct(self);
      self.inCart = true;
      self.incCartQty();
    },
    removeFromCart() {
      shoppingCartStore.removeProduct(self);
      self.inCart = false;
      self.cartQty = 0;
    },
  }));
