<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Búsqueda de productos</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <h3>Ingresa el nombre de un negocio y da clic en buscar</h3>

              <v-row>
                <v-col cols="12">
                  <v-text-field label="Negocio" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="cerrar()">Cerrar</v-btn>
            <v-btn color="blue darken-1" text @click="cerrar()">Buscar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "BusquedaModal",
  props: ["dialog"],
  methods: {
    cerrar: function () {
        console.log("es");
      this.$emit('cerrar-dialogo');
    },
  },
};
</script>