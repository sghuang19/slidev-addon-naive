<script setup>
import { NBadge } from "naive-ui";
</script>

<template>
  <NBadge v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NBadge>
</template>