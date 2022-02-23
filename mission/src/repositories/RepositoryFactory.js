import ItemRepository from './ItemRepository';
import WishRepository from './WishRepository';
import CartRepository from './CartRepository';
import MyInfoRepository from './MyInfoRepository';

const repositories = {
  items: ItemRepository,
  wishes: WishRepository,
  carts: CartRepository,
  myInfo: MyInfoRepository,
};
export default {
  get: (name) => repositories[name],
};
