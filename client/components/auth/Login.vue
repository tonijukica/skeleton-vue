<template>
  <v-container fluid="">
    <v-row justify="center" align-content="center">
      <v-col md="3" sm="6" align-self="center">
        <v-sheet
          elevation="20"
          class="paper"
        >
         <v-avatar color="secondary" size="64" class="avatar">
            <v-icon large color="white">mdi-lock-outline</v-icon>
          </v-avatar>
          <div class="display-1 text">
            Log in
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
            v-model="password"
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            outlined />
          <v-btn class='btn' color="primary">
            Log in
          </v-btn>
          <v-btn class='btn' color="secondary">
            Register
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    username: '',
    password: ''
  })
}
</script>

<style>
.paper {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
}
.input{
  width: 75%;
}
.avatar{
  margin: 16px;
}
.text{
  margin-bottom: 16px;
}
.btn{
  width: 75%;
  margin-top: 8px
}
</style>
