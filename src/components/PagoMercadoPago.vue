<template>
  <div>
      <p>
          hola
      </p>
    <form method="POST">
      <div ></div>
    </form>
  </div>
</template>
<script>

export default {
  name: "PagoMercadoPago",

  mounted() {
    mercadopago.configure({
      access_token:
        "TEST-2726741704197970-082000-7286efb029a77c6464835cfd8f2b9205-225445625",
    });
  },

  created() {
    var scripts = [
      "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js",
    ];
    scripts.forEach((script) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
};
</script>