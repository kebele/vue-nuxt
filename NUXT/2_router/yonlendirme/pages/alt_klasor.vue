<template>
  <div class="container">
    bu bir deneme sayfası
    <nuxt-child keep-alive: keep-alive-props="{exclude: 'modal'}" />
    <nuxt-child name="inner"/>
    
  </div>
</template>