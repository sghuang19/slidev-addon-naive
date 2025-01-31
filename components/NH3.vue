<script setup>
import { NH3 } from "naive-ui";
</script>

<template>
  <NH3 v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NH3>
</template>