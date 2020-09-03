<template>
  <div class="text-h5">
    <v-container>
      <p>Información de contacto</p>
      <v-form ref="form">
        <v-text-field
          type="email"
          color="#bf383d"
          outlined
          required
          flat
          solo
          placeholder="Correo electrónico"
          v-model="correo"
          :rules="reglasCorreo"
        ></v-text-field>
        <p>Datos para el envío</p>
        <v-text-field
          v-model="nombre"
          color="#bf383d"
          outlined
          :rules="reglastexto"
          required
          flat
          solo
          placeholder="Nombres"
        ></v-text-field>

        <v-text-field
          v-model="apellidos"
          color="#bf383d"
          outlined
          :rules="reglastexto"
          required
          flat
          solo
          placeholder="Apellidos"
        ></v-text-field>
        <v-text-field
          v-model="direccion"
          color="#bf383d"
          outlined
          :rules="reglastexto"
          required
          flat
          solo
          placeholder="Direccion"
        ></v-text-field>
        <v-text-field
          v-model="provincia"
          color="#bf383d"
          outlined
          :rules="reglastexto"
          required
          flat
          solo
          placeholder="Provincia"
        ></v-text-field>
        <v-text-field
          v-model="codigopostal"
          color="#bf383d"
          outlined
          :rules="reglastexto"
          required
          flat
          solo
          placeholder="Código postal"
        ></v-text-field>
        <v-text-field
          v-model="telefono"
          color="#bf383d"
          outlined
          :rules="reglastexto"
          required
          flat
          solo
          placeholder="Telefono"
        ></v-text-field>
        <v-text-field
          color="#bf383d"
          outlined
          required
          flat
          solo
          hint="Luego de ingresarlo, presiona ENTER. Si no tienes uno, deja este campo vacio. "
          placeholder="Cupon"
          v-model="cupon"
          @keyup.enter="verifyCupon()"
        ></v-text-field>
        <v-select solo v-model="metodoPago" :items="['Efectivo','Tarjetas']" label="Método de pago"></v-select>
      </v-form>
      <p style="text-align:right">Total $ {{total}}</p>
      <v-btn
        depressed
        block
        color="#bf383d"
        class="py-7 mb-3"
        @click="payNow()"
      >{{(metodoPago == "Efectivo") ? "Finalizar compra" : "Proceder a pagina de pago"}}</v-btn>
      <v-btn outlined block color="#eb8f8f" class="py-7 mb-3" @click="$router.go(-1)">Ir atrás</v-btn>

      <v-snackbar v-model="aplico" timeout="2500" color="success" elevation="15" shaped="">
     <v-row no-gutters  justify="center" align-content="center"
 >
       <v-col cols="12" class="d-flex justify-center align-center">
        
           Cupon aplicado, descuento 400 
        
       </v-col>
     </v-row>
    </v-snackbar>
     <v-snackbar v-model="noaplico" timeout="2500" color="alert" elevation="15" shaped="">
     <v-row no-gutters  justify="center" align-content="center"
 >
       <v-col cols="12" class="d-flex justify-center align-center">
        
           Ingresaste un cupon inválido
        
       </v-col>
     </v-row>
    </v-snackbar>

    </v-container>
  </div>
</template>
<script>
let axios = require("axios");
export default {
  name: "Checkout",
  computed: {
    redireccion() {
      return this.metodoPago == "Efectivo" ? "Confirmacion" : "Mercadopago";
    },
  },
  mounted() {
    if (this.$store.state.carrito.length == 0) {
      this.$router.push("/");
    } else {
      this.darTotal();
    }
  },
  data() {
    return {
      reglastexto: [(v) => !!v || "Campo requerido"],
      reglasCorreo: [
        (v) => !!v || "Campo requerido",
        (v) => !!v || "Campo requerido",
        (v) => /.+@.+/.test(v) || "Ingresa un Email-válido",
      ],

      correo: "",
      nombre: "",
      apellidos: "",
      direccion: "",
      codigopostal: "",
      provincia: "",
      telefono: "",
      cupon: "",
      metodoPago: "Efectivo",
      total: "",
      aplico:false,
      noaplico:false,
      yadesconto:false
    };
  },
  methods: {
    verifyCupon() {
      let local = this;

      axios
        .get(local.$store.state.url + "/cupon/" + local.cupon)
        .then(function (response) {
          if (response.data) {
            if (!local.yadesconto) {
              local.total = local.total - 400;
              local.yadesconto = true
              local.aplico = true;
            }
           
          } else{
              local.noaplico = true;
            }
        });
    },
    darTotal() {
      let aux = 0;
      this.$store.state.carrito.forEach((element) => {
        aux = aux + element.total * element.precio;
      });
      this.total = aux;
    },
    payNow() {
      if (this.$refs.form.validate()) {
        if (1) {
          console.log("epalarepa");
          let url = this.$store.state.url;
          console.log(url);
          let data = {
            correo: this.correo,
            nombre: this.nombre,
            apellidos: this.apellidos,
            direccion: this.direccion,
            codigopostal: this.codigopostal,
            provincia: this.provincia,
            telefono: this.telefono,
            cupon: (this.cupon == '') ? 'Sin cupon': this.cupon,
            metodoPago: this.metodoPago,
            total: this.total,
          };

          let peticion = [];

          if (this.metodoPago == "Mercado pago") {
            peticion = [this.$store.state.carrito, data];

            axios
              .post(url + "/requestPaymentMercadoPago", peticion)
              .then(function (response) {
                console.log(response);
                window.location.replace(response.data);
              }); // Guardamos los datos de proporcionó
          } else {
            peticion = [this.$store.state.carrito, data];
            axios
              .post(url + "/requestPaymentEfectivo", peticion)
              .then(function (response) {
                window.location.replace(response.data);
              });
          }
        }
      }
    },
  },
};
</script>
<style>
.v-text-field input {
  font-size: 1.2em;
}
</style>