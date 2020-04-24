<template>
  <v-card
    class="mx-auto box"
    max-width="320px"
  >
    <v-icon x-large color="secondary">mdi-account-circle</v-icon>
    <h4>Username</h4>
    <span>{{username}}</span>
    <h4>Email</h4>
    <span>{{email}}</span>
    <h4>Registration date</h4>
    <span>{{regDate}}</span>
  </v-card>
</template>

<script>
import api from '../api/user';
import { mapGetters } from 'vuex';
import { format } from 'date-fns';

export default {
  data: () => ({
    id: '',
    username: '',
    email: '',
    regDate: '',
  }),
  methods: {
    ...mapGetters({
      user: 'getUser'
    }),
    getProfile() {
      api.profile(this.user.token).then((data) => {
        this.id = data.id;
        this.username = data.username;
        this.email = data.email;
        this.regDate = format(new Date(data.createdAt), 'dd/MM/yyyy');
      });
    }
  },
  mounted() {
    this.getProfile();
  }
}
</script>

<style>
.box{
  padding: 16px;
  margin-top: 32px;
  text-align: center;
}
</style>
