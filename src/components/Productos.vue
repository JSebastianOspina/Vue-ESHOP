<template>
  <div>
    <v-container>
      <v-row justify="end">
        <v-col class="d-flex justify-end">
          <v-btn outlined color="grey" @click="$router.go(-1)">Volver a las tiendas</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="4" v-for="(datos,key) in data" :key="key">
          <v-card :elevation="valor(datos.oferta)" :to="productoUrl(datos.id)" color="#F3F3F3">
            <v-img :src="imagenDestacada(datos.imagenes)" :height="altura()" contain></v-img>
            <p class="text-h6 text-center mt-1 font-weight-light">{{datos.name}}</p>
            <p class="text-body-1 text-center mt-1 font-weight-light">
              Desde:
              <strong>${{datos.price}}</strong>
            </p>
            <div style="height:2px"></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Productos",
  components: {},
  mounted() {
    this.getProducts();
  },
  
  

  methods: {

    imagenDestacada: function (param){
      let aux = 'http://admin.settimanaferia.com/storage/'+param.split(',',2)[1];
      return aux;
    },
    getProducts: function () {
      console.log(this.$route.params.negocio);
      let local = this;
      

      axios
        .get(this.url + "/products/" + this.$route.params.negocio)
        .then(function (response) {
          console.log(response.data);
          local.data = response.data;
        });
    },
    altura: function () {
      if (this.$vuetify.breakpoint.smAndUp) {
        return "40vh";
      } else {
        return "30vh";
      }
    },

    elevacion: function (oferta) {
      if (oferta) {
        return "box-shadow: 2px 2px 20px -10px red";
      } else {
        return "box-shadow: 2px 4px 20px -10px grey";
      }
    },
    valor: function (oferta) {
      if (oferta) return "8";
      else return "4";
    },
    productoUrl: function (id) {
      return this.$route.params.negocio + "/" + id;
    },
  },
  data: () => ({
    url: "http://admin.settimanaferia.com/api",

   data: [],
  }),
};
</script>