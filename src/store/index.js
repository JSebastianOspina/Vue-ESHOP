import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito: [],
    carrito2: [],
    aux: 0,
    url: "https://admin.settimanaferia.com/api",


  },
  mutations: {
    eliminarItem(state,itemId){
      console.log("esteee")
      console.log(itemId);
      let aux;
      state.carrito.forEach(function(valor,key){
        console.log(valor);
        console.log(key);
        if(valor.serial == itemId){
          aux = key;
        }
      });
      console.log(aux);
      state.carrito.splice(aux,1);
    },
    incrementarItem(state, {
      itemId,
      accion
    }) {
      console.log(itemId);
      let aux;
      state.carrito.forEach(element => {
        if (element.serial == itemId) {
          if (accion == "sumar") {
            element.total = element.total + 1;

          } else {
            element.total = (element.total - 1 > 0) ? element.total - 1: element.total;

          }

        }
      });

      console.log(state.carrito);
    },

    addShopping2(state, {
      tiendaId,
      itemId,
      color,
      talla,
      cantidad,
      img,
      precio,
      nombre
    }) {

      let objeto = {
        'tienda': tiendaId,
        'id': itemId,
        'serial': tiendaId+'-'+itemId + '-' + talla + '-' + color,
        'cantidad': cantidad,
        'color': color,
        'talla': talla,
        'img': img,
        'precio':precio,
        'nombre' : nombre
      };
      state.carrito2.push(objeto);
      console.log(state.carrito2);

    },
    guardarCarrito(state,objeto){
      console.log("esto esta viendo")
      console.log(objeto);
      if(state.carrito.length > 0){
        console.log("Ya habia algo")
        objeto.forEach(element => {
          state.carrito.push(element);
        });
        state.carrito2 = [];
       

      }else{
        state.carrito = objeto;
        state.carrito2 = [];


      }
      console.log("actualizado!!!")
      console.log(state.carrito);
      console.log(state.carrito2)

    }

  },
  actions: {},
  modules: {}
})