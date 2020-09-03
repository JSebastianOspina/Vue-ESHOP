<template>
  <div class="menu">
    <v-container>
      <v-row justify="center" no-gutters>
        <v-col cols="12">
          <v-row>
            <v-col class="d-none d-sm-flex justify-center justify-sm-start">
              <h1
                style="text-align:center"
                class="ml-1 text-subtitle-1 text-sm-h4 font-weight-bold text-uppercase"
              >Settimana</h1>
            </v-col>

            <v-col cols="12" sm="4" class="d-flex justify-md-end justify-space-around align-center">
              <v-btn text class="mr-2" @click="openSearch()">
                <v-icon color="black">mdi-magnify</v-icon>
              </v-btn>

              <v-btn text class="mr-2" :to="'/carrito'">
                <v-icon color="black">mdi-cart</v-icon>
                {{darCantidadItems}}
              </v-btn>
              <v-btn text :to="{ name: 'Informacion'}">
                <v-icon color="black"  >mdi-account</v-icon>
              </v-btn>
            
            </v-col>
              <v-col cols="12" class=" d-sm-none justify-center justify-sm-start" style="padding:1px">
                <h1
                  style="text-align:center"
                  class="ml-1 text-subtitle-1 text-sm-h4 font-weight-bold text-uppercase"
                >Settimana</h1>
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
      if (this.$store.state.carrito2.length > 0) {
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
<style>
.menu {
  background-color: #bf383d;
}
</style>