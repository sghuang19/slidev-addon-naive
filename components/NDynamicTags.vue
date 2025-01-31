<script setup>
import { NDynamicTags } from "naive-ui";
</script>

<template>
  <NDynamicTags v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDynamicTags>
</template>