<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>kebele</b-navbar-brand>

      <b-nav-form>
        <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <!-- Right aligned nav items -->
      <!-- eğer store da email yoksa login i gösterecek değilse yani store da email varsa yani kullanıcı login olduysa o zamanda kullanıcının email ini gösterecek -->
      <b-navbar-nav class="ml-auto" v-if="!this.$store.state.email">
        <!-- <b-nav-item>sign in</b-nav-item> -->
        <!-- <b-nav-item>sign in</b-nav-item> -->
        <b-nav-item @click="$bvModal.show('bv-modal-example')"
          >login</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" v-else>
        <b-nav-item>{{ this.$store.state.email}}</b-nav-item
        >
      </b-navbar-nav>
        <!-- bootstrap vue dan modal alaım, buna tıklayınca modal açılacak -->
      <div>
        <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title>
            LOGIN
          </template>
          <div class="d-block text-center">
            <div>
              <b-tabs content-class="mt-3" align="center">
                <b-tab title="sign in" active>
                  <div>
                    <b-form-group
                      id="fieldset-1"
                      label="Enter your email"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="email"
                        type="email"
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="fieldset-2"
                      label="Enter your password"
                      label-for="input-2"
                    >
                      <b-form-input
                        id="input-2"
                        v-model="password"
                        type="password"
                        trim
                      ></b-form-input>
                    </b-form-group>
                    <b-button variant="outline-primary" block>sign in</b-button>
                  </div>
                </b-tab>

                <!-- SIGN UP -->
                <b-tab title="sign up">
                  <div>
                    <b-form-group
                      id="fieldset-3"
                      label="Enter your email"
                      label-for="input-3"
                    >
                      <b-form-input
                        id="input-3"
                        v-model="email"
                        type="email"
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="fieldset-4"
                      label="Enter your name"
                      label-for="input-4"
                    >
                      <b-form-input
                        id="input-4"
                        v-model="name"
                        trim
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="fieldset-5"
                      label="Enter your password"
                      label-for="input-5"
                    >
                      <b-form-input
                        id="input-5"
                        v-model="password"
                        type="password"
                        trim
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="fieldset-6"
                      label="Enter your address"
                      label-for="input-6"
                    >
                      <b-form-textarea
                        id="input-6"
                        v-model="address"
                        placeholder="Enter address..."
                        rows="3"
                        max-rows="6"
                        trim
                      ></b-form-textarea>
                    </b-form-group>
                    <b-form-group
                      id="fieldset-7"
                      label="Enter your phone number"
                      label-for="input-7"
                    >
                      <b-form-input
                        id="input-7"
                        v-model="phone"
                        trim
                      ></b-form-input>
                    </b-form-group>
                    <b-button
                      variant="outline-primary"
                      block
                      @click="userSignUp"
                      >sign up</b-button
                    >
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
          <!-- <b-button
            class="mt-3"
            block
            @click="$bvModal.hide('bv-modal-example')"
            >Close Me</b-button
          > -->
        </b-modal>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import Cookie from "js-cookie";

export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      phone: null,
      address: null
    };
  },
  methods: {
    async userSignUp() {
      try {
        let userData = {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          address: this.address
        };

        let result = await this.$axios.$post(
          "http://localhost:8080/api/authentication/signup",
          userData
        );
        console.log(result);
        if (result.success) {
          //burada authentication dan bize bir token dönecekti
          Cookie.set("access_token", result.token);
          //bu noktada vuex hazırlayacağız, store a gidip index.js i hazırlayalım, statei ve mutation u oluşturduk artık bunu burada çalıştırabiliriz
          this.$store.commit("setUser", {
            name: this.name,
            email: this.email
          });
          //butona bastıktan sonra kapansın
          //hide parametresi yukarıda modal ın en başındaki modal-id de yazıyor
          this.$bvmodal.hide('bv-modal-example')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped></style>
