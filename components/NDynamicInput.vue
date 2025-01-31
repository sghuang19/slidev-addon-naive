<script setup>
import { NDynamicInput } from "naive-ui";
</script>

<template>
  <NDynamicInput v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDynamicInput>
</template>