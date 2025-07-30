<template>
  <section class="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-2xl mx-auto text-white">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
        <p class="text-pink-100 mb-8">
          Get notified about new collections, exclusive deals, and kawaii content straight to your inbox!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              class="bg-white/10 border-white/20 text-white placeholder:text-pink-200 px-4 py-2 rounded"
          />
          <button
              @click="subscribe"
              class="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-4 py-2 rounded"
          >
            Subscribe
          </button>
        </div>
        <p class="text-sm text-pink-200 mt-4">
          No spam, unsubscribe anytime. We respect your privacy 💕
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

function subscribe() {
  if (email.value.trim()) {
    alert(`Subscribed with ${email.value}`);
    // You can replace this with actual API call logic
  } else {
    alert('Please enter a valid email!');
  }
}
</script>
