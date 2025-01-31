<script setup>
import { NMarquee } from "naive-ui";
</script>

<template>
  <NMarquee v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NMarquee>
</template>