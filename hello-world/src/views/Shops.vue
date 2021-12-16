<template>
  <div class="home">
    <div>
      <select v-model="selectedCategory">
        <option value="">All</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>
    <div class="products__wrapper">
      <div v-for="(item, index) in shopItem" :key="index" class="product">
        <div class="product__image--wrapper">
          <img :src="item.image" :alt="item.title" class="product__image" />
        </div>
        <div>
          <h3>{{ item.title }}</h3>
          <h4>{{item.price}}$</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Shops",
  data: () => ({
    selectedCategory: "",
  }),
  computed: {
    shopItem() {
      return this.$store.state.products;
    },
  },
  watch: {
    selectedCategory: {
      handler() {
        if (this.selectedCategory) {
          this.$store.dispatch("getShopProducts", {
            category: "category/" + this.selectedCategory,
          });
        } else {
          this.$store.dispatch("getShopProducts", {
            category: "",
          });
        }
      },
    },
  },
  mounted() {
    this.$store.dispatch("getShopProducts", {
      category: "",
    });
  },
});
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.products__wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.product__image--wrapper {
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product__image {
  max-height: 100%;
  max-width: 100%;
}
.product {
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
