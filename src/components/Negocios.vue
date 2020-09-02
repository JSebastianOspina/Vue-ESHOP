<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="(datos,key) in data" :key="key">
          <v-card class="mt-6 mx-auto" :to="'negocio/'+datos.slug" max-width="400" elevation="10">
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
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Negocios",
  mounted() {
    this.getStores();
  },
  methods: {
    getStores: function () {
      let local = this;
      axios.get(this.url + "/store").then(function (response) {
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