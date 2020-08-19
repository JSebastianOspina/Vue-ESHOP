import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Productos from '../components/Productos.vue'
import Producto from '../components/Producto.vue'
import Carrito from '../components/Carrito.vue'
import Checkout from '../components/Checkout.vue'
import Confirmacion from '../components/Confirmacion.vue'
import Mercadopago from '../components/Mercadopago.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/negocio/:negocio',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/negocio/:negocio/:producto',
    name: 'producto',
    component: Producto
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: Carrito
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/Confirmacion',
    name: 'Confirmacion',
    component: Confirmacion
  },
  {
    path: '/Mercadopago',
    name: 'Mercadopago',
    component: Mercadopago
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
