<template>
  <section class="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="flex items-center space-x-2">
            <Sparkles class="h-6 w-6 text-pink-500" />
            <div class="text-xs font-semibold p-1 px-4 rounded-4xl bg-pink-100 text-pink-700">
              New Collection Available
            </div>
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
            Express Yourself with
            <span
                class="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Mini Stickers
            </span>
          </h1>
          <p class="text-lg text-gray-600 max-w-md">
            Discover thousands of cute, kawaii, and unique stickers to personalize your world.
            From laptops to phones, make everything adorable!
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <ui-button variant="primary">
              Shop Now
              <template #icon-right>
                <ArrowRight class="h-5 w-5" />
              </template>
            </ui-button>
            <ui-button variant="secondary">
              View Collections
            </ui-button>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20"></div>
          <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Sparkles } from 'lucide-vue-next'
</script>
