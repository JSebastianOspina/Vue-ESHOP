<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-text>
            <v-container>
              <v-img src="https://i.ibb.co/gd00CMn/112-F5-A3-D-76-F0-44-C4-98-A7-E1-F16-C090-EAF.png" height="120" contain class="mb-2">
                
              </v-img>
              <p class="text-h4 center" style="text-align:center;margin-top:5px">Bienvenido</p>
              <h3>Para poder ingresar, debes diligenciar tu correo electrónico</h3>

              <v-text-field type="email" label="Correo electrónico" v-model="emailUsuario" required></v-text-field>
              <v-btn color="blue darken-1" depressed block @click="cerrar()">Ingresar</v-btn>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "CapturarEmail",
  props: ["dialog"],
  data() {
    return {
      emailUsuario: "",
    };
  },
  methods: {
    cerrar: function () {
      if (this.emailUsuario != "") {
        this.$emit("cerrar-dialogo");
        //LLamada ajax
      } else {
        alert("Debes ingresar un email");
      }
    },
  },
};
</script>