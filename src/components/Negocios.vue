<template>
  <div>
    <h3 class="text-center text-h3 font-weight-medium" style="margin-bottom:-15px">NEGOCIOS</h3>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="(datos,key) in data"
            :key="key">
          <v-card
            class="mt-6 mx-auto"
            
            :to="'negocio/'+datos.url"
            max-width="400"
            elevation="10"
          >
            <v-img class="white--text align-end" height="200px" :src="datos.img">
              <h2
                class="text-center mb-3 text-h4 font-weight-black"
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
  data: () => ({
    data: [
      {
        id: "1",
        nombre: "Pepito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/lookbook-mobile_400x.jpg",
        descripcion: "Descripción pepito",
        url: "about",
      },
      {
        id: "1",
        nombre: "Pepito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/lookbook-mobile_400x.jpg",
        descripcion: "Descripción pepito",
        url: "pepito",
      },
      {
        id: "1",
        nombre: "Pepito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/lookbook-mobile_400x.jpg",
        descripcion: "Descripción pepito",
        url: "pepito",
      },
      {
        id: "1",
        nombre: "Juanito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/clothing_394x.jpg?v=1530846922",
        descripcion: "Descripción pepito",
        url: "pepito",
      },
      {
        id: "1",
        nombre: "Pepito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/lookbook-mobile_400x.jpg",
        descripcion: "Descripción pepito",
        url: "pepito",
      },
      {
        id: "1",
        nombre: "Juanito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/clothing_394x.jpg?v=1530846922",
        descripcion: "Descripción pepito",
        url: "pepito",
      },
      {
        id: "1",
        nombre: "Pepito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/lookbook-mobile_400x.jpg",
        descripcion: "Descripción pepito",
        url: "pepito",
      },
      {
        id: "1",
        nombre: "Juanito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/clothing_394x.jpg?v=1530846922",
        descripcion: "Descripción pepito",
        url: "pepito",
      },
    ],
  }),
};
</script>