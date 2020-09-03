import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Productos from '../components/Productos.vue'
import Producto from '../components/Producto.vue'
import Carrito from '../components/Carrito.vue'
import Checkout from '../components/Checkout.vue'
import Confirmacion from '../components/Confirmacion.vue'
import PagoMercadoPago from '../components/PagoMercadoPago.vue'
import BuscarNegocio from '../components/BuscarNegocio.vue'
import Informacion from '../components/Informacion.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscar/:negocio',
    name: 'BuscarNegocio',
    component: BuscarNegocio
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
    name: 'PagoMercadoPago',
    component: PagoMercadoPago
  },
  {
    path: '/Informacion',
    name: 'Informacion',
    component: Informacion
  },
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
