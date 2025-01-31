<script setup>
import { NH5 } from "naive-ui";
</script>

<template>
  <NH5 v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NH5>
</template>