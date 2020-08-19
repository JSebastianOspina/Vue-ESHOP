<template>
  <div class="text-h5">
    <v-container>
      <p>Información de contacto</p>
      <v-text-field type="email" outlined flat solo placeholder="Correo electrónico"></v-text-field>
      <p>Datos para el envío</p>
      <v-text-field outlined flat solo placeholder="Nombres"></v-text-field>

      <v-text-field outlined flat solo placeholder="Apellidos"></v-text-field>
      <v-text-field outlined flat solo placeholder="Direccion"></v-text-field>
      <v-text-field outlined flat solo placeholder="Provincia"></v-text-field>
      <v-text-field outlined flat solo placeholder="Código postal"></v-text-field>
      <v-text-field outlined flat solo placeholder="Telefono"></v-text-field>
      <v-text-field
        outlined
        flat
        solo
        hint="Si no tienes uno, deja este campo vacio "
        placeholder="Cupon"
      ></v-text-field>
      <v-select solo v-model="metodoPago" :items="['Efectivo','Mercado pago']" label="Método de pago"></v-select>
      <p style="text-align:right">Total $ {{$store.state.carrito.total}}</p>
      <v-btn depressed block color="#449A9A" class="py-7 mb-3" :to="redireccion">{{(metodoPago == "Efectivo") ? "Finalizar compra" : "Proceder a pagina de pago"}}</v-btn>
          <v-btn outlined block color="grey" class="py-7 mb-3" @click="$router.go(-1)">Ir atrás</v-btn>

    </v-container>
  </div>
</template>
<script>
export default {
  name: "Checkout",
  computed: {
      redireccion(){
          return (this.metodoPago == "Efectivo") ? "Confirmacion" : "Mercadopago";
      }
  },
  mounted() {
      if(this.$store.state.carrito2.length <=0){
          this.$router.push('/')
      }
  },
  data() {
    return {
      metodoPago: "Efectivo",
    };
  },
};
</script>
<style>
  .v-text-field input {
    font-size: 1.2em;
  }
</style>