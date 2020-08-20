<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-row>
            <v-col class="d-flex justify-center justify-sm-start">
              <h1 style="text-align:center" class="ml-1">Settimana</h1>
            </v-col>

            <v-col cols="12" sm="4" class="d-flex justify-md-end justify-center align-center">
              <v-btn outlined class="mr-2" @click="openSearch()">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>

              <v-btn outlined class="mr-2" :to="'/carrito'">
                <v-icon>mdi-cart</v-icon>
                {{darCantidadItems}}
              </v-btn>
              <v-btn outlined>
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </v-col>
          </v-row>
         
        </v-col>
      </v-row>
    </v-container>
     
    <BusquedaModal :dialog="dialog" @cerrar-dialogo="closeSearch()" />
  </div>
</template>
<script>
import BusquedaModal from "../modales/BusquedaModal";

export default {
  name: "Menuprincipal",
  components: {
    BusquedaModal,
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    // a computed getter
    darCantidadItems: function () {
      if (this.$store.state.carrito2.length> 0) {
        
        return this.$store.state.carrito2.length;
      } else {
        return this.$store.state.carrito.length;
      }
    },
  },
  methods: {
    openSearch: function () {
      this.dialog = true;
    },
    closeSearch: function () {
      this.dialog = false;
    },
  },
};
</script>