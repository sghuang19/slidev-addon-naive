<script setup>
import { NSkeleton } from "naive-ui";
</script>

<template>
  <NSkeleton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NSkeleton>
</template>