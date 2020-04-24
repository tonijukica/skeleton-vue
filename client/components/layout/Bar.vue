<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <div class="d-flex align-center home">
        App
      </div>
    </router-link>
    <v-spacer />
    <div v-if="user.user">
      <router-link to="/profile">
        <span class="user">{{ user.user.username }}</span>
      </router-link>
      <v-btn v-if="user" color="secondary" @click="handleLogout">
        Log out
      </v-btn>
    </div>
    <v-btn v-else color="secondary" @click="loginRedirect">
      Log in
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'appbar',
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
    handleLogout() {
      this.logout().then(() => this.$router.replace('/'));
    }
  }
}
</script>

<style>
.user{
  margin-right: 8px;
  cursor: pointer;
  color: white;
}
.home{
  color: white;
}
</style>
