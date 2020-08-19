
<template>
  <v-container fluid>
    <v-row justify="end">
      <v-col cols="2" class="d-flex justify-end">
        <v-btn outlined color="grey" @click="$router.go(-1)">Ver mas productos</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-carousel cycle :height="altura()" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cycle
            hide-delimiter-background
            show-arrows-on-hover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="#F3F3F3">
          <v-card-text>
            <p class="text-h5 font-weight-light my-2 black--text">Chaqueta de cuero negra</p>
            <p class="text-h6 font-weight-medium my-2" style="color: #449A9A">${{items[0].precio}}</p>
            <v-divider></v-divider>
            <p class="text-uppercase mt-2">Color: {{color}}</p>
            <v-select color="#449A9A" v-model="color" :items="items[0].color" label="COLOR"></v-select>
            <p class="text-uppercase mt-2">Talla: {{talla}}</p>
            <v-row justify="center">
              <v-col cols="3" v-for="(item,i) in items[0].tallas" :key="i" @click="talla = item">
                <v-btn outlined>{{item}}</v-btn>
              </v-col>
            </v-row>
            <p class="text-uppercase mt-2">Cantidad: {{cantidad}}</p>
            <v-row justify="center">
              <v-col cols="3" class="d-flex justify-center align-center">
                <v-btn @click="(cantidad>1) ? cantidad-- : 0">-</v-btn>
              </v-col>
              <v-col cols="3" class="d-flex justify-center align-center">
                <v-btn @click="cantidad++">+</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn
                  outlined
                  block
                  color="#449A9A"
                  class="py-6"
                  @click="incrementar($route.params.negocio,$route.params.producto,color,talla,cantidad,items[0].src,items[0].precio)"
                >AÑADIR AL CARRITO</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn depressed block color="#449A9A" class="py-6" to="/carrito">Ir al carrito</v-btn>
              </v-col>
              <v-alert
                v-if="alerta"
                type="success"
                dismissible
                transition="scale-transition"
              >Se ha añadido el artículo a el carrito</v-alert>
            </v-row>
            <p class="text-uppercase mt-2">Descripcion</p>
            <div class="mx-2">
              <p class="text-uppercase mt-2 text-justify">{{items[0].descripcion}}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Producto",
  mounted() {
    console.log(this.$vuetify.breakpoint);
  },
  methods: {
    altura: function () {
      if (this.$vuetify.breakpoint.smAndUp) {
        return "100vh";
      } else {
        return "400";
      }
    },
    incrementar: function (
      tiendaId,
      itemId,
      color,
      talla,
      cantidad,
      img,
      precio
    ) {
      if (
        color != "Seleccione un color" &&
        talla != "Por favor, seleccione una talla"
      ) {
        this.$store.commit("addShopping2", {
          tiendaId,
          itemId,
          color,
          talla,
          cantidad,
          img,
          precio,
        });
        this.alerta = true;
      } else {
        alert("Selecciona");
      }
    },
    comprar: function (tiendaId, itemId, color, talla, cantidad, img) {
      if (
        color != "Seleccione un color" &&
        talla != "Por favor, seleccione una talla"
      ) {
        this.$store.commit("addShopping2", {
          tiendaId,
          itemId,
          color,
          talla,
          cantidad,
          img,
        });
        this.$router.push({ name: "carrito" });
      } else {
        alert("Selecciona");
      }
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
  data() {
    return {
      alerta: false,
      color: "Seleccione un color",
      talla: "Por favor, seleccione una talla",
      cantidad: 1,

      items: [
        {
          src:
            "https://fenixprint.co/6159-large_default/camiseta-estampada-hombre-the-beatles-lonely-hearts.jpg",
          color: ["Rojo", "Blanco"],
          tallas: ["S", "M", "L"],
          descripcion:
            "You don’t need a lot to do great work. Talented people joined by a common compassion or cause find innovative ways to multiply scarce resources into something bigger than life.",
          precio: 365,
        },
        {
          src:
            "https://cdn.shopify.com/s/files/1/0883/0062/products/do-alot-gray-2000_1200x_78abb7bb-0106-493f-bf41-e5dd9153b9df_295x.jpg",
        },
        {
          src:
            "https://cdn.shopify.com/s/files/1/0883/0062/products/do-alot-navy-new-2_2048x2048_43751919-b917-49d1-a594-58af029607eb_295x.jpg",
        },
      ],
    };
  },
};
</script>
