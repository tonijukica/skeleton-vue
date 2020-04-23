<template>
  <v-container fluid="">
    <v-row justify="center" align-content="center">
      <v-col md="3" sm="6" align-self="center">
        <v-alert :value="!!errMsg" type="error" text transition="fade-transition" dismissible >
          {{errMsg}}
        </v-alert>
        <v-sheet
          elevation="20"
          class="paper"
        >
         <v-avatar color="secondary" size="64" class="avatar">
            <v-icon large color="white">mdi-account-box-outline</v-icon>
          </v-avatar>
          <div class="display-1 text">
            Register
          </div>
          <v-text-field
            class="input"
            v-model="username"
            type="text"
            name="username"
            label="Username"
            placeholder="Username"
            outlined />
            <v-text-field
            class="input"
            v-model="email"
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            outlined />
          <v-text-field
            class="input"
            v-model="password"
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            outlined />
          <v-btn class='btn' color="secondary" @click="submitRegister">
            Register
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'register',
  data: () => ({
    username: '',
    email: '',
    password: '',
    errMsg: ''
  }),
  methods: {
    ...mapActions(['register']),
    submitRegister() {
      this.register({
        username: this.username,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('login');
      })
      .catch((err) => this.errMsg = err.response.data)
    }
  }
}
</script>

<style>

</style>
