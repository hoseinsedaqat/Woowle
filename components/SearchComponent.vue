<script setup>
// imports
import { search_view_options } from "@/constants/search_view_options";

import SpinnerComponent from "@/components/SpinnerComponent.vue";

import { engine } from "@/store/index";

import { useRouter } from "vue-router";

import { onMounted } from "vue";
// data
const use_engine = engine();

const router = useRouter();
// methods
function go_search() {
  if (use_engine.search === "") {
    return;
  } else {
    use_engine.search_engine();
  }
}
// mounted
onMounted(() => {
  if (use_engine.search === "") {
    router.push("/");
  } else {
    use_engine.search_engine();
  }
});
</script>

<template>
  <!-- Seach View Header -->
  <section id="search__view__header">
    <main>
      <NuxtLink to="/">
        <img
          src="@/assets/images/WoowleLogo.png"
          alt="Woowle_Logo"
          class="cursor-pointer"
        />
      </NuxtLink>
    </main>
    <main>
      <i class="bi bi-search cursor-pointer" @click="go_search()"></i>
      <input
        type="text"
        name="for_search"
        placeholder="Search in Woowle"
        v-model="use_engine.search"
        @keyup.enter="go_search()"
      />
    </main>
  </section>
  <!-- Search Options -->
  <section id="search__view__options">
    <p class="cursor-pointer" v-for="search_options in search_view_options" :key="search_options">{{ search_options }}</p>
  </section>
  <!-- Search Results -->
  <section id="search__view__result">
    <p class="search__view__result__information">
      About {{ use_engine.get_search_item_information.formattedTotalResults }} results ({{
        use_engine.get_search_item_information.formattedSearchTime
      }}
      seconds)
    </p>
    <template v-if="!use_engine.search_loading">
      <main v-for="item in use_engine.get_search_data" :key="item">
        <div>
          <a :href="item.formattedUrl" target="_blank">
            <span v-if="item.pagemap && item.pagemap.cse_image">
              <img :src="item.pagemap.cse_image[0].src" alt="Site_Favicon_Images" />
            </span>
            <span v-else></span>
            <span>{{ item.displayLink }}</span>
            <span><i class="bi bi-three-dots-vertical cursor-pointer"></i></span>
          </a>
        </div>
        <div>
          <a :href="item.formattedUrl" target="_blank">
            <p>{{ item.title }}</p>
          </a>
        </div>
        <div>
          <span>
            {{ item.snippet }}
          </span>
        </div>
      </main>
    </template>
    <template v-else>
      <SpinnerComponent></SpinnerComponent>
    </template>
  </section>
</template>
