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
        <b-button @click="logout" variant="outline-primary">log out</b-button>
      </b-navbar-nav>
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
    }
  },
};
</script>

<style lang="scss" scoped></style>