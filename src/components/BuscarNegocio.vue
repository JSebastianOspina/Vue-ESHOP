<template>
  <div>
    <v-container>
        <v-row justify="end">
        <v-col class="d-flex justify-end">
          <v-btn outlined color="#eb8f8f" :to="{ name: 'Home'}">Volver a las tiendas</v-btn>
        </v-col>
      </v-row>
      <v-row v-if="data[0] != null"> 
        <v-col cols="12" md="6" v-for="(datos,key) in data" :key="key">
          <v-card class="mt-6 mx-auto" :to="{name: 'Productos', params: {negocio:datos.slug}}" max-width="400" elevation="10">
            <v-img
              class="white--text align-end"
              aspect-ratio="1"
              :src="'https://admin.settimanaferia.com/storage/'+datos.imagen"


            >

              <h2
                class="text-center mb-3 text-h4 font-weight-black text-uppercase"
                style="text-shadow: 1px 2px 2px black; "
              >{{datos.nombre}}</h2>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else >
         <v-col class="d-flex justify-end align-center" style="height:80vh" >
           <div >
               
                    <p class="text-h6 text-md-h3 text-center">
                    Lo sentimos, no pudimos encontrar ningún negocio con esos terminos de búsqueda :(
    
                    </p>
                             <v-btn outlined block color="#eb8f8f" :to="{ name: 'Home'}">Volver a las tiendas</v-btn>

           </div>

           
         </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "BuscarNegocio",
  mounted() {
    this.getStores();
  },
  watch: {
    $route(to, from) {
    this.getStores();
    }
  },

  methods: {
    getStores: function () {
      let local = this;
      axios.get(this.url + "/store/"+this.$route.params.negocio).then(function (response) {
        console.log(response.data);
        local.data = response.data;
      });
    },
  },
  data: () => ({
    url: "https://admin.settimanaferia.com/api",

    data: [],
  }),
};
</script>