<template>
  <div>



    
    <v-container>
      <v-row justify="end">
            <v-col class="d-flex justify-end ">
              <v-btn
            outlined
            
            color="grey"
            
            @click="$router.go(-1)"
          >Volver a las tiendas</v-btn>
            </v-col>
          </v-row>
      <v-row>
        <v-col cols="6" md="4" v-for="(datos,key) in data" :key="key" >

          <v-card :elevation="valor(datos.oferta)" :to="productoUrl(datos.id)" color="#F3F3F3" > 

              <v-img :src="datos.img" :height="altura()" contain></v-img>
              <p class="text-h6 text-center mt-1 font-weight-light">{{datos.nombre}}</p>
              <p class="text-body-1 text-center mt-1 font-weight-light ">Desde: <strong>${{datos.precio}}</strong></p>
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
  components:{
    
  },
  
  methods:{
     altura: function () {
      if (this.$vuetify.breakpoint.smAndUp) {
        return "40vh";
      } else {
        return "30vh";
      }
    },

    elevacion: function (oferta){
      if(oferta){
        return 'box-shadow: 2px 2px 20px -10px red';
        
      } else{
          return 'box-shadow: 2px 4px 20px -10px grey';

      }
    },
    valor: function(oferta){
      if(oferta) return "8";
      else return "4";
    },
    productoUrl: function(id){
      return this.$route.params.negocio+'/'+id;
    }
  },
  data: () => ({
    data: [
      {
        id: "1",
        nombre: "Hoodie de lana",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/products/leather-hoody2000_1024x1024_2792108e-e976-4e38-baf8-1c39ee39a2bc_720x.jpg",
        descripcion: "Descripción pepito",
        url: "Mattelsa",
        precio: "350",
        oferta:1
      },
      {
        id: "2",
        nombre: "Camiseta manga corta",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/products/enjoy-blk-2000_1200x_9b7a2c64-74d2-4f09-ae95-4b520199f5af_720x.jpg",
        descripcion: "Descripción pepito",
        url: "pepito",
        precio: "350",
         oferta:0
      },
      {
        id: "3",
        nombre: "Do a lot with little",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/products/do-alot-navy-2000_1200x_fabebfe0-05fa-40c1-9e77-fb19a6148d4c_720x.jpg",
        descripcion: "Descripción pepito",
        url: "pepito",
        precio: "350",
         oferta:1
      },
      {
        id: "1",
        nombre: "Juanito Store",
        img:
          "https://cdn.shopify.com/s/files/1/0883/0062/files/clothing_394x.jpg?v=1530846922",
        descripcion: "Descripción pepito",
        url: "pepito",
        precio: "350",
         oferta:1
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