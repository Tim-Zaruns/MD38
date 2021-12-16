import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import axios from "axios";

// define your typings for the store state
type ShopType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export interface State {
  count: number;
  products: ShopType[];
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    products: [] as ShopType[],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setShopProducts(state, data) {
      state.products = data;
      console.log(data);
    },
  },
  actions: {
    async getShopProducts(items, { category }) {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${category}`);
      items.commit("setShopProducts", data);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
