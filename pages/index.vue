<script setup>
useHead({
  title: "Woowle",
});
</script>

<template>
  <!-- Header -->
  <header>
    <a href="https://echmail.netlify.app/" target="_blank">Gmail</a>
    <NuxtLink to="/">Images</NuxtLink>
    <i class="bi bi-grid-3x3-gap-fill"></i>
    <div>
      <img src="@/assets/images/HoseinSedaqat.jpg" alt="User-Profile-Img" />
    </div>
  </header>
  <!-- Search Bar -->
  <section id="search__bar">
    <div class="search__bar__logo">
      <img src="@/assets/images/GoogleLogo.png" alt="Google_Logo" />
    </div>
    <div class="search__bar__input">
      <i class="bi bi-search"></i>
      <input type="text" name="for_search" />
    </div>
  </section>
  <!-- Search Button -->
  <section id="search__btn">
    <button>Google Search</button>
    <button>I'm Felling Lucky</button>
  </section>
</template>
