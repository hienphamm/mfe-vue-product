<script lang="ts" setup>
import "../style.css";
import {ArrowRight, Heart, ShoppingCart, Star} from "lucide-vue-next";
import {ref} from "vue";
import StayUpdated from "../components/StayUpdated.vue";
import {useRouter} from "vue-router";
import Hero from "../components/Hero.vue";

defineProps<{
  msg: string;
}>();

const bestSellers = ref([
  {
    id: 1,
    name: "Cute Cat Stickers",
    image: "https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg",
    reviews: 123,
    price: "$4.99",
    originalPrice: "$6.99",
  },
  {
    id: 2,
    name: "Funny Dog Pack",
    image: "https://images.dog.ceo/breeds/bakharwal-indian/Bakharwal.jpg",
    reviews: 98,
    price: "$3.99",
    originalPrice: "$5.99",
  },
  // ... add more products
]);

const router = useRouter();

function goToDetail(productId: number) {
  router.push(`/product/${productId}`);
}

function toggleFavorite(productId: number) {
  // handle favorite logic here
  alert(`Toggled favorite for product ${productId}`);
}

function addToCart(productId: number) {
  // handle add to cart logic here
  alert(`Added product ${productId} to cart`);
}
</script>

<template>
  <hero/>

  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">Best Sellers</h2>
        <p class="text-gray-600">
          Our most loved sticker packs that customers can't get enough of
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
            v-for="product in bestSellers"
            :key="product.id"
            class="group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-2xl bg-white"
            @click="goToDetail(product.id)"
        >
          <div class="p-4">
            <div class="relative mb-4">
              <ui-button
                  class="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  size="icon"
                  variant="secondary"
                  @click.stop="toggleFavorite(product.id)"
              >
                <Heart class="h-4 w-4"/>
              </ui-button>

              <img
                  :alt="product.name"
                  :src="product.image"
                  class="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 class="font-semibold mb-2">{{ product.name }}</h3>

            <div class="flex items-center space-x-2 mb-2">
              <div class="flex items-center">
                <Star
                    v-for="i in 5"
                    :key="i"
                    class="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              </div>
              <span class="text-sm text-gray-500">({{ product.reviews }})</span>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="font-bold text-lg">{{ product.price }}</span>
                <span class="text-sm text-gray-500 line-through">
                  {{ product.originalPrice }}
                </span>
              </div>

              <ui-button variant="primary" @click.stop="addToCart(product.id)">
                <ShoppingCart class="h-4 w-4"/>
              </ui-button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <ui-button variant="secondary">
          View All Products
          <ArrowRight class="ml-2 h-4 w-4"/>
        </ui-button>
      </div>
    </div>
  </section>

  <stay-updated/>
</template>
