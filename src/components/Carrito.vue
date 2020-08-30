<template>
  <div>
    <v-container>
      <v-card
        color="#F3F3F3"
        elevation="3"
        v-for="(producto, key) in $store.state.carrito"
        :key="key"
        class="mb-5"
      >
        <v-row>
          <v-col cols="3" class="px-5">
            <v-img :src="producto.img"></v-img>
          </v-col>
          <v-col cols="8" md="9">
            <v-row>
              <v-col>
                <p
                  class="text-subtitle-1 text-md-h4 font-weight-light my-2 black--text"
                >{{producto.nombre}}</p>
                <span
                  class="text-h6 font-weight-medium my-2"
                  style="color: #449A9A"
                >${{producto.precio}}</span>
              </v-col>
              <v-col cols="1" class="d-flex justify-center align-center" style="overflow:hidden">
                <v-icon @click="eliminarItem(producto.serial)">mdi-delete</v-icon>
              </v-col>
            </v-row>

            <p
              class="text-subtitle-2 text-md-h6 font-weight-light my-2 black--text"
            >{{producto.color}}/{{producto.talla}}</p>

            <p
              class="text-subtitle-2 text-md-button font-weight-light my-2 black--text"
            >Cantidad: {{producto.total}}</p>
        
            <span
                  class="text-subtitle-1 text-md-button font-weight-medium my-2" 
                 
                >Total: ${{producto.precio*producto.total}}</span>
            <v-row justify="start">
              <v-col cols="3" md="1" class="d-flex justify-center align-center mr-3">
                <v-btn @click="incrementarItem(producto.serial,'restar')">-</v-btn>
              </v-col>
              <v-col cols="3" md="1" class="d-flex justify-center align-center">
                <v-btn @click="incrementarItem(producto.serial,'sumar')">+</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col></v-col>
        <v-col class="d-flex justify-end">
          <p class="text-h6 text-md-h4 font-weight-medium my-2 black--text"  style="color: #449A9A">Total: ${{total}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-btn
            outlined
            block
            color="#BF383D"
            class="py-7"
            @click="$router.go(-1)"
          >Volver al catalogo</v-btn>
        </v-col>
        <v-col cols="12" md="6" class="d-flex jusify-center">
          <v-btn solid block color="#BF383D" class="py-7" to="/checkout">Proceder a el pago</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Carrito",
  mounted() {
    this.prepararCarrito();
    this.darTotal();
  },
  data() {
    return {
      total: 0,
    };
  },

  methods: {
    darTotal() {
      let aux = 0;
      this.$store.state.carrito.forEach((element) => {
        aux = aux + element.total * element.precio;
      });
      this.total = aux;
    },
    incrementarItem(itemId, accion) {
      this.$store.commit("incrementarItem", { itemId, accion });
      this.darTotal();
    },
    eliminarItem(itemId) {
      console.log(itemId);
      this.$store.commit("eliminarItem", itemId);
      this.darTotal();
    },
    prepararCarrito: function () {
      console.log("sientre");
      let filtrado = [];
      let lista = [];
      this.$store.state.carrito2.forEach((element) => {
        if (!lista.includes(element.serial)) {
          lista.push(element.serial);
        }
      });
      //Obtenemos los valores de el serial
      console.log(lista);
      let definitivo = [];
      lista.forEach((element) => {
        let objeto = {};
        let contador = 0;

        this.$store.state.carrito2.forEach((sub) => {
          if (sub.serial == element) {
            console.log(element);
            contador = contador + sub.cantidad;
            objeto = {
              tienda: sub.tienda,
              id: sub.id,
              serial:
                sub.tienda + "-" + sub.id + "-" + sub.talla + "-" + sub.color,
              cantidad: sub.cantidad,
              color: sub.color,
              talla: sub.talla,
              img: sub.img,
              total: contador,
              precio: sub.precio,
              nombre : sub.nombre
            };
          } else {
            console.log("nope");
          }
        });
        definitivo.push(objeto);
      });
      console.log("asiquede");
      console.log(definitivo);
      this.$store.commit("guardarCarrito", definitivo);
    },
  },
};
</script>