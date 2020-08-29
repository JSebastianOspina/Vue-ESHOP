
<template>
  <v-container fluid>
    <v-row justify="end">
      <v-col cols="2" class="d-flex justify-end">
        <v-btn outlined color="#eb8f8f" @click="$router.go(-1)">Ver mas productos</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-carousel cycle :height="altura()" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item
            v-for="(item,i) in imagenes"
            :key="i"
            :src="item"
            cycle
            hide-delimiter-background
            show-arrows-on-hover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="#F3F3F3">
          <v-card-text>
            <p class="text-h5 font-weight-light my-2 black--text">{{articulo.nombre}}</p>
            <p class="text-h6 font-weight-medium my-2" style="color: #bf383d">${{articulo.precio}}</p>
            <v-divider></v-divider>

            <p class="text-uppercase mt-2">Color: {{color}}</p>
           
          
            <v-row justify="center">
              <v-col cols="3" v-for="(item,i) in stock" :key="i" @click="selectColor(item)">
                <v-btn outlined>{{item.color}}</v-btn>
              </v-col>
            </v-row>

            <p class="text-uppercase mt-2">Talla: {{talla}}</p>
            <v-row justify="center">
              <v-col cols="3" v-for="(item,i) in size" :key="i" @click="talla = item">
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
                  color="#bf383d"
                  class="py-6"
                  @click="incrementar($route.params.negocio,$route.params.producto,color,talla,cantidad,articulo.src,articulo.precio)"
                >AÑADIR AL CARRITO</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn depressed block color="#bf383d" class="py-6" to="/carrito">Ir al carrito</v-btn>
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
              <p class="text-uppercase mt-2 text-justify">{{articulo.descripcion}}</p>
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
    this.getProduct();
  },
  methods: {
    getProduct: function () {
      let productId = this.$route.params.producto;
      let url = "https://admin.settimanaferia.com/api";
      let local = this;
      axios.get(url + "/product/" + productId).then(function (response) {
        console.log(response);
        let imagenes = [];
        let aux = response.data[0].imagenes;
        let anotheraux = 0;
        aux = aux.split(",");
        console.log(aux);
        aux.forEach((element) => {
          if (!anotheraux == 0) {
            imagenes.push("http://admin.settimanaferia.com/storage/" + element);
          }
          anotheraux = 1;
        });
        local.imagenes = imagenes;
        console.log(imagenes);
        local.articulo = {
          color: ["rojo", "amarillo"],
          tallas: ["M", "L"],
          descripcion: response.data[0].description,
          precio: response.data[0].price,
          nombre: response.data[0].name,
          id: response.data[0].id,
        };
        console.log(local.articulo);

        local.stock = response.data[1];
        console.log(local.stock);
      });
    },
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
    selectColor: function (item) {
      this.size = item.size;
      this.color = item.color;
    },
  },
  data() {
    return {
      alerta: false,
      color: "Seleccione un color",
      talla: "Por favor, seleccione una talla",
      cantidad: 1,
      imagenes: [],
      articulo: {},
      stock: [],
      sera: 0,
      size: [],
    };
  },
};
</script>
