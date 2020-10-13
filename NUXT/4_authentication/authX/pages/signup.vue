<template>
  <div>
    <!-- bootstrap vue yu projeyi kurarken eklediğimiz için gidip direkt componentlerden alıp burada kullanabiliriz -->
    <!-- fomlardan alalım -->
    <b-form @submit.stop.prevent>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <label for="text-password">Password</label>
      <b-input
        type="password"
        id="text-password"
        aria-describedby="password-help-block"
      ></b-input>
      <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </b-form-text>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
