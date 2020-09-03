
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
           
          
            <v-row justify="center" >
              <v-col  v-for="(item,i) in stock" :key="i" class="d-flex justify-center">
                <v-btn @click="selectColor(item)" outlined>{{item.color}}</v-btn>
              </v-col>
            </v-row>

            <p class="text-uppercase mt-2">Talla: {{talla}}</p>
            <v-row justify="center">
              <v-col  v-for="(item,i) in size" :key="i" class="d-flex justify-center" >
                <v-btn @click="talla = item" outlined>{{item}}</v-btn>
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
                  @click="incrementar($route.params.negocio,$route.params.producto,color,talla,cantidad,imagenes[0],articulo.precio,articulo.nombre)"
                >AÑADIR AL CARRITO</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn depressed block color="#bf383d" class="py-6" to="/carrito">Ir al carrito</v-btn>
              </v-col>
             
            </v-row>
            <p class="text-uppercase mt-2">Descripcion</p>
            <div class="mx-2">
              <p class="text-uppercase mt-2 text-justify">{{articulo.descripcion}}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snack" timeout="2500" color="#bf383d" elevation="15" shaped="">
     <v-row no-gutters  justify="center" align-content="center"
 >
       <v-col cols="12" class="d-flex justify-center align-center">
        
           Producto añadido con éxito
        
       </v-col>
     </v-row>
    </v-snackbar>
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
            imagenes.push("https://admin.settimanaferia.com/storage/" + element);
          }
          anotheraux = 1;
        });
        local.imagenes = imagenes;
        console.log(imagenes);
        local.articulo = {
          color: ["rojo", "amarillo"],
          tallas: ["M", "L"],
          descripcion: response.data[0].description,
          precio: (response.data[0].price>response.data[0].offert)? response.data[0].offert : response.data[0].price,
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
      precio,
      nombre
    ) {
      if (
        color != "Seleccione un color" &&
        talla != "Por favor, seleccione una talla"
      ) {
        this.snack = true;
        this.$store.commit("addShopping2", {
          tiendaId,
          itemId,
          color,
          talla,
          cantidad,
          img,
          precio,
          nombre
        });
      } else {
        alert("Selecciona");
      }
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
      snack:false,
      tiempo:2000
    };
  },
};
</script>
