<template>
  <v-app>
    <div class="appsita">
      <menuPrincipal />

      <router-view />
    </div>
  </v-app>
</template>

<script>
import menuPrincipal from "./components/menus/Menuprincipal";

export default {
  name: "App",

  components: {
    menuPrincipal,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.appsita{
  background-color: #f7fbfc;
}
.appsitas {
  overflow: hidden;
  background: rgb(191, 56, 61);
  background: -moz-linear-gradient(
    180deg,
    rgba(191, 56, 61, 0.9920343137254902) 0%,
    rgba(231, 159, 161, 1) 54%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(191, 56, 61, 0.9920343137254902) 0%,
    rgba(231, 159, 161, 1) 54%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(191, 56, 61, 0.9920343137254902) 0%,
    rgba(231, 159, 161, 1) 54%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#bf383d",endColorstr="#ffffff",GradientType=1);
}
</style>
