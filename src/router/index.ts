import {createRouter, createWebHistory} from 'vue-router'
import Product from "../pages/Product.vue";
import StickerDetail from "../pages/StickerDetail.vue";

const routes = [
    {
        path: '/',
        name: 'Product',
        component: Product,
    },
    {
        path: '/product/:id',
        name: 'StickerDetail',
        component: StickerDetail,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
