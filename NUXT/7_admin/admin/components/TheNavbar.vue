<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Product" right>
          <b-dropdown-item href="/product/create">create</b-dropdown-item>
          <b-dropdown-item href="/product/delete">delete</b-dropdown-item>
          <b-dropdown-item href="/product/update">update</b-dropdown-item>
          <b-dropdown-item href="#">all</b-dropdown-item>
        </b-nav-item-dropdown>

        
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
