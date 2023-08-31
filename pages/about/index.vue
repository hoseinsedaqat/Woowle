<script setup>
import { onMounted } from "vue";
import { engine } from "@/store/index";
const use_engine = engine();
onMounted(() => {
  use_engine.search_engine();
});
</script>

<template>
  <h2>Nice</h2>
</template>
