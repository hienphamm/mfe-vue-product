<script lang="ts" setup>
import {computed, ref} from 'vue'
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Truck
} from 'lucide-vue-next'
import {useRouter} from "vue-router";

const currentImageIndex = ref(0)
const quantity = ref(1)
const selectedSize = ref('Standard')
const isWishlisted = ref(false)

const productImages = [
  'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg',
  'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg',
  'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg',
  'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg'
]

const sizeOptions = [
  {name: 'Mini', size: '2-3cm', price: '$3.99'},
  {name: 'Standard', size: '4-5cm', price: '$4.99'},
  {name: 'Large', size: '6-7cm', price: '$6.99'}
]

const relatedProducts = [
  {
    id: 1,
    name: 'Cute Panda Pack',
    image: 'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg',
    price: '$3.99',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Bunny Sticker Set',
    image: 'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg',
    price: '$5.99',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Ocean Animals',
    image: 'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg',
    price: '$4.50',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Dog Lovers',
    image: 'https://images.dog.ceo/breeds/spaniel-japanese/n02085782_2074.jpg',
    price: '$6.00',
    rating: 4.6
  }
]

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % productImages.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + productImages.length) % productImages.length
}

const updateQuantity = (change: number) => {
  quantity.value = Math.max(1, quantity.value + change)
}

const totalPrice = computed(() => {
  return `$${(4.99 * quantity.value).toFixed(2)}`
})

const toggleFavorite = (productId: number) => {
  isWishlisted.value = !isWishlisted.value
  alert(`Toggled favorite for product ${productId}`)
}

const addToCart = (productId: number) => {
  alert(`Added product ${productId} to cart`)
}

const router = useRouter();

function goToDetail(productId: number) {
  router.push(`/product/${productId}`);
}

</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b">
      <div class="container mx-auto px-4 py-3">
        <nav class="flex items-center space-x-2 text-sm text-gray-600">
          <a class="hover:text-pink-600" href="#">Home</a>
          <span>/</span>
          <a class="hover:text-pink-600" href="#">Cute Animals</a>
          <span>/</span>
          <span class="text-gray-900">Kawaii Cat Pack</span>
        </nav>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Product Images -->
        <div class="space-y-4">
          <div class="relative bg-white rounded-2xl overflow-hidden shadow-lg">
            <img :src="productImages[currentImageIndex]" alt="Kawaii Cat Pack"
                 class="w-full h-96 lg:h-[500px] object-cover"/>
            <ui-button class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" size="icon"
                       variant="ghost" @click="prevImage">
              <ChevronLeft class="h-5 w-5"/>
            </ui-button>
            <ui-button class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" size="icon"
                       variant="ghost" @click="nextImage">
              <ChevronRight class="h-5 w-5"/>
            </ui-button>
          </div>

          <div class="flex space-x-2 overflow-x-auto">
            <button
                v-for="(image, index) in productImages"
                :key="index"
                :class="['flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2', currentImageIndex === index ? 'border-pink-500' : 'border-gray-200']"
                @click="currentImageIndex = index"
            >
              <img :alt="`View ${index + 1}`" :src="image" class="w-full h-full object-cover"/>
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl lg:text-4xl font-bold mb-2">Kawaii Cat Pack</h1>
            <div class="flex items-center space-x-4 mb-4">
              <div class="flex items-center space-x-1">
                <Star v-for="i in 5" :key="i" class="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                <span class="text-sm text-gray-600 ml-2">4.9 (234 reviews)</span>
              </div>
              <div variant="secondary">In Stock</div>
            </div>
            <div class="flex items-center space-x-4 mb-6">
              <span class="text-3xl font-bold text-pink-600">$4.99</span>
              <span class="text-xl text-gray-500 line-through">$6.99</span>
              <div class="text-white font-semibold rounded-2xl px-2 bg-red-500">30% OFF</div>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed">
              Adorable kawaii cat sticker pack featuring 12 unique designs! Perfect for decorating laptops, phones,
              water bottles, and more. Made with high-quality vinyl that's waterproof and fade-resistant.
            </p>

            <!-- Size Options -->
            <div>
              <h3 class="font-semibold mb-3">Size Options</h3>
              <div class="grid grid-cols-3 gap-3">
                <button
                    v-for="option in sizeOptions"
                    :key="option.name"
                    :class="['p-3 border rounded-lg text-center transition-colors cursor-pointer', selectedSize === option.name ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-200 hover:border-gray-300']"
                    @click="selectedSize = option.name"
                >
                  <div class="font-medium">{{ option.name }}</div>
                  <div class="text-sm text-gray-500">{{ option.size }}</div>
                  <div class="text-sm font-semibold">{{ option.price }}</div>
                </button>
              </div>
            </div>

            <!-- Quantity -->
            <div>
              <h3 class="font-semibold mb-3">Quantity</h3>
              <div class="flex items-center space-x-3">
                <ui-button :disabled="quantity <= 1" size="icon" variant="outline" @click="updateQuantity(-1)">
                  <Minus class="h-4 w-4"/>
                </ui-button>
                <span class="text-xl font-semibold w-12 text-center">{{ quantity }}</span>
                <ui-button size="icon" variant="outline" @click="updateQuantity(1)">
                  <Plus class="h-4 w-4"/>
                </ui-button>
              </div>
            </div>

            <!-- Actions -->
            <div class="space-y-3">
              <ui-button
                  class="w-full flex justify-center"
                  variant="primary">
                <ShoppingCart class="mr-2 h-5 w-5"/>
                Add to Cart - {{ totalPrice }}
              </ui-button>
              <div class="flex space-x-3">
                <ui-button class="flex justify-center w-full" variant="secondary"
                           @click="isWishlisted = !isWishlisted">
                  <Heart :class="['mr-2 h-5 w-5', isWishlisted ? 'fill-red-500 text-red-500' : '']"/>
                  {{ isWishlisted ? 'Wishlisted' : 'Add to Wishlist' }}
                </ui-button>
              </div>
            </div>

            <!-- Features -->
            <div class="grid grid-cols-3 gap-4 pt-4">
              <div class="text-center">
                <Truck class="h-6 w-6 mx-auto mb-2 text-green-600"/>
                <div class="text-sm font-medium">Free Shipping</div>
                <div class="text-xs text-gray-500">Orders over $25</div>
              </div>
              <div class="text-center">
                <Shield class="h-6 w-6 mx-auto mb-2 text-blue-600"/>
                <div class="text-sm font-medium">Quality Guarantee</div>
                <div class="text-xs text-gray-500">Premium materials</div>
              </div>
              <div class="text-center">
                <RotateCcw class="h-6 w-6 mx-auto mb-2 text-purple-600"/>
                <div class="text-sm font-medium">Easy Returns</div>
                <div class="text-xs text-gray-500">30-day policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
              v-for="product in relatedProducts"
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
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span class="font-bold text-lg">{{ product.price }}</span>
                </div>

                <ui-button variant="primary" @click.stop="addToCart(product.id)">
                  <ShoppingCart class="h-4 w-4"/>
                </ui-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
