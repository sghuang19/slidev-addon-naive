<script setup>
import { NH1 } from "naive-ui";
</script>

<template>
  <NH1 v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NH1>
</template>