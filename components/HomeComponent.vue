<script setup>
// imports
import { engine } from "@/store/index";

import { useRouter } from "vue-router";
// data
const use_engine = engine();

const router = useRouter();
// methods
function go_search() {
  if (use_engine.search === "") {
    return;
  } else {
    router.push("/search");
  }
}
</script>

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
      <i class="bi bi-search cursor-pointer" @click="go_search()"></i>
      <input
        type="text"
        name="for_search"
        placeholder="Search in Woowle"
        v-model="use_engine.search"
        @keyup.enter="go_search()"
      />
    </div>
  </section>
  <!-- Search Button -->
  <section id="search__btn">
    <button class="cursor-pointer" @click="go_search()">Google Search</button>
    <button class="cursor-pointer">I'm Felling Lucky</button>
  </section>
</template>
