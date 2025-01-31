<script setup>
import { NAnchor } from "naive-ui";
</script>

<template>
  <NAnchor v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NAnchor>
</template>