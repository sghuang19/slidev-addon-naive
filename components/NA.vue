<script setup>
import { NA } from "naive-ui";
</script>

<template>
  <NA v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NA>
</template>