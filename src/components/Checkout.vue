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
          hint="Si no tienes uno, deja este campo vacio "
          placeholder="Cupon"
          v-model="cupon"
        ></v-text-field>
        <v-select
          solo
          v-model="metodoPago"
          :items="['Efectivo','Mercado pago']"
          label="Método de pago"
        ></v-select>
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
    };
  },
  methods: {
    darTotal() {
      let aux = 0;
      this.$store.state.carrito.forEach((element) => {
        aux = aux + element.total * element.precio;
      });
      this.total = aux;
    },
    payNow() {
      if (this.$refs.form.validate() || 1 == 1) {
        if (this.metodoPago == "Efectivo") {
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
            cupon: this.cupon,
            metodoPago: this.metodoPago,
            total: this.total,
          };
          let peticion = [this.$store.state.carrito,data];

          axios
            .post(url + "/requestPaymentEfectivo", peticion)
            .then(function (response) {
              console.log(response);
            });
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