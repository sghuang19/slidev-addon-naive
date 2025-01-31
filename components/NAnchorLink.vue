<script setup>
import { NAnchorLink } from "naive-ui";
</script>

<template>
  <NAnchorLink v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NAnchorLink>
</template>