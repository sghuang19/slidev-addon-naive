<script setup>
import { NCarouselItem } from "naive-ui";
</script>

<template>
  <NCarouselItem v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCarouselItem>
</template>