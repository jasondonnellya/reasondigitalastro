<template>
  <nav class="site-navbar">
    <div>
      <img src="/images/placeholder-logo.png" width="120" />
    </div>
    <div>
      <a class="site-navbar__link" v-for="{ label, href } in navItems" :key="label" :href="href">
        {{ label }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import globalStore from "../store/globalStore";

const store = globalStore();
let navItems = store.NavItems;
</script>