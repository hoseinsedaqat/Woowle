<script setup>
import { engine } from "@/store/index";

const use_engine = engine();
</script>

<template>
  <h1>{{ use_engine.project_name }}</h1>
</template>
