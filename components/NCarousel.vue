<script setup>
import { NCarousel } from "naive-ui";
</script>

<template>
  <NCarousel v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCarousel>
</template>