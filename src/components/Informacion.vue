<template>
  <div>
    <v-container class="texto">
      <v-row justify="end">
        <v-col class="d-flex justify-end">
          <v-btn outlined color="#eb8f8f" :to="{ name: 'Home'}">Ver todos los negocios</v-btn>
        </v-col>
      </v-row>

      <h2>Acerca de Settimana</h2>
      <p>Con Settimana, es fácil encontrar desde tu celular la mejor ropa para cada momento.</p>
      <p>Hay variedad de marcas y prendas!. Cuando estés buscando ese jean, esa camisa, o cambiar tu look, tendrás siempre la mejor opción al alcance de tu mano. Elegí lo que quieras vestir!</p>
      <p>
        También podés sumar tu negocio para vender, sobre todo en estos tiempos!!
        Con Settimana, compra desde tu casa!
      </p>
      <p>Primer shopping virtual</p>
      <h2>¿Cómo comprar?</h2>
      <p>
        Debe ingresar si o si su mail, nos sirve para poder enviarle cupones de descuento y tener comunicación con el usuario por su pedido.
        Luego podrá elegir entre todos los negocios, o simplemente buscarlo con la lupa.
      </p>
      <p>Una vez ingresado al negocio, podrá elegir el o los productos que desee, eligiendo talla y color, los añade al carrito.</p>
      <p>Podrá ir al carrito y efectuar su pago en efectivo o con tarjeta. Le llegará un mail de confirmación.</p>
      <p>El o los negocios se encargarán de enviarle su pedido</p>
      <h2>Contacto</h2>
      <p>E-mail: feriasemanal2020@gmail.com</p>
      <h2>Cambios y envío</h2>
      <p>
        Para cambiar un producto, se debe comunicar con nosotros y le comunicaremos los pasos a seguir.
        Los envíos se hacen al día siguiente de la compra, los de comida o bebidas, se hace en el mismo día (hasta el horario dispuesto por las autoridades).
        Los pedidos a negocios de otras provincias demorarían unos cuantos días.
      </p>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Informacion",
};
</script>

<style >
.texto p {
  text-align: left;
}
</style>