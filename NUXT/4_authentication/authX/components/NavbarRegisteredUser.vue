<template>
  <div>
    <b-navbar type="light" variant="light">
      <!-- <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle> -->

      <!-- <b-navbar-brand>login</b-navbar-brand> -->
      <b-nav-brand>nuxt</b-nav-brand>

      <!-- <b-collapse id="nav-text-collapse" is-nav> -->
        <b-navbar-nav>
          <b-nav-item href="/profile">profile</b-nav-item>
        </b-navbar-nav>
      <!-- </b-collapse> -->
      <b-navbar-nav class="ml-auto">
          <!-- bu class en sağa atar -->
          <n-nav-text>{{ this.$store.state.users.user ? this.$store.state.users.user.email : "please login"}}</n-nav-text>
        
      </b-navbar-nav>
      <b-button :style="{marginLeft: '10px'}" @click="logout" variant="outline-primary">log out</b-button>
    </b-navbar>
  </div>
</template>

<script>
import {auth} from "@/services/firebase"
import Cookie from "js-cookie" 

export default {
    methods: {
    async logout(){
      await auth.signOut(); //sign out işlemi
      await Cookie.remove("access_token") //cookie silme işlemi
      this.$router.push("/login/singin")
    }
  },
};
</script>

<style lang="scss" scoped></style>