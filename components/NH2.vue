<script setup>
import { NH2 } from "naive-ui";
</script>

<template>
  <NH2 v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NH2>
</template>