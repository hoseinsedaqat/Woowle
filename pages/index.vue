<script setup>
import { engine } from "@/store/index";

import { useRouter } from "vue-router";

const router = useRouter();

const use_engine = engine();

function go_search() {
  if (use_engine.search !== "") {
    router.push("/about");
  } else {
    alert("please search");
  }
}
</script>

<template>
  <NuxtLink to="/about">About</NuxtLink>
  <input type="text" v-model="use_engine.search" />
  <button @click="go_search()">Search</button>
  <h1>{{ use_engine.project_name }}</h1>
</template>
