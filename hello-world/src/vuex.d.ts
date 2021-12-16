import { Store } from "vuex";

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

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    count: number;
    products: ShopType[];
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
