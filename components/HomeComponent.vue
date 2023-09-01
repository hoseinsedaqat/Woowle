<script setup></script>

<template>
  <!-- Header -->
  <header>
    <a href="https://echmail.netlify.app/" target="_blank">Gmail</a>
    <NuxtLink to="/">Images</NuxtLink>
    <i class="bi bi-grid-3x3-gap-fill cursor-pointer"></i>
    <div>
      <img
        src="@/assets/images/HoseinSedaqat.jpg"
        alt="User-Profile-Img"
        class="cursor-pointer"
      />
    </div>
  </header>
  <!-- Search Bar -->
  <section id="search__bar">
    <div class="search__bar__logo">
      <img src="@/assets/images/WoowleLogo.png" alt="Woowle_Logo" />
    </div>
    <div class="search__bar__input">
      <i class="bi bi-search cursor-pointer"></i>
      <input type="text" name="for_search" placeholder="Search in Woowle" />
    </div>
  </section>
  <!-- Search Button -->
  <section id="search__btn">
    <button class="cursor-pointer">Google Search</button>
    <button class="cursor-pointer">I'm Felling Lucky</button>
  </section>
</template>
