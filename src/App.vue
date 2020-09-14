<template>
  <v-app >
    <div class="appsita" >
      <menuPrincipal />

      <router-view />

      <CapturarEmail :dialog="dialog" @cerrar-dialogo="ingresoEmail()" />
      <v-btn
              fab
              color="#69C95F"
              bottom
              right
              fixed
              :href="whatsapp()"
              target="_blank"
            >
              <v-icon color="white">mdi-whatsapp</v-icon>
            </v-btn>
    </div>
  </v-app>
</template>

<script>
import menuPrincipal from "./components/menus/Menuprincipal";
import CapturarEmail from "./components/modales/CapturarEmail";

export default {
  name: "App",

  components: {
    menuPrincipal,
    CapturarEmail,
  },
  mounted() {

    window.addEventListener('beforeinstallprompt', function(e) {
		// beforeinstallprompt Event fired

		// e.userChoice will return a Promise.
		// For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
		e.userChoice.then(function(choiceResult) {

			console.log(choiceResult.outcome);

			if(choiceResult.outcome == 'dismissed') {
				console.log('User cancelled home screen install');
			}
			else {
				console.log('User added to home screen');
      }
      })
      });
      

    if (localStorage.getItem("ingresoMail") == "true") {
      this.dialog = false;
    } else {
      this.dialog = true;
    }
  },

  data: () => ({
    dialog: false,
    //
  }),
  methods: {
    ingresoEmail: function () {
      localStorage.setItem("ingresoMail", "true");
      this.dialog = false;
    },
    closeSearch: function () {},
    whatsapp: function(){
      return 'https://api.whatsapp.com/send?phone=5493855879712&text=&source=&data=&app_absent='
    }
  },
};
</script>

<style>
.appsits {
  background-color: #f7fbfc;
}
.appsita {
  overflow: hidden;

}
</style>
