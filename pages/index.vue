<script setup>
import { engine } from "@/store/index";

const use_engine = engine();
</script>

<template>
  <NuxtLink to="/about">About</NuxtLink>
  <h1>{{ use_engine.project_name }}</h1>
</template>
