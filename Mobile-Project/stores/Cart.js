import { types } from 'mobx-state-tree';
import { ProductModel } from '../models/Product';
const shoppingCartStore = types
  .model('ShoppingCartStore', {
    products: types.array(types.reference(ProductModel)),
  })
  .views(self => ({
    get totalAmount() {
      return self.products.reduce(
        (acc, current) => acc + current.totalPrice,
        0
      );
    },
    get totalProducts() {
      return self.products.length;
    },
  }))
  .actions(self => ({
    addProduct(product) {
      const entry = self.products.find(el => el.id === product.id);

      if (!entry) {
        self.products.push(product);
      }
    },
    removeProduct(product) {
      self.products = self.products.filter(el => el.id !== product.id);
    },
    removeList(){
        self.products = [];
    }
  }))
  .create({ products: [] });
export default shoppingCartStore;
