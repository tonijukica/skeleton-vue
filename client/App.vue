<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        App
      </div>
      <v-spacer />
      <div v-if="user.user">
        <span>{{ user.user.username }}</span>
        <v-btn v-if="user" color="secondary" @click="logoutRedirect">
          Log out
        </v-btn>
      </div>
      <v-btn v-else color="secondary" @click="loginRedirect">
        Log in
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "components/HelloWorld";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    ...mapActions(["logout"]),
    loginRedirect() {
      this.$router.push("/login");
    },
    logoutRedirect() {
      this.logout().then(() => this.$router.push("/"));
    }
  }
};
</script>
