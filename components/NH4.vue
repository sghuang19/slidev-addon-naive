<script setup>
import { NH4 } from "naive-ui";
</script>

<template>
  <NH4 v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NH4>
</template>